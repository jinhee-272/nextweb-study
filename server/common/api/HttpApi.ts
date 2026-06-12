import {
    FetchResponse,
    FetchSuccessResponse,
    isErrorResponse,
    resolveApiResponse
} from "@/server/common/api/exception/ExceptionType";
import {tokenStore} from "@/server/common/api/TokenStoreClass";
import {withErrorHandling} from "@/server/common/api/exception/ExceptionHandlerUtil";
import {callToken} from "@/server/common/api/TokenAccessApi";


type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type RequestOptions = {
    method: HttpMethod;
    url: string;
    headers?: HeadersInit;
    body?: unknown;
    token?: string;
};

export const HttpFetch = async <T>(
    options: RequestOptions,
): Promise<FetchSuccessResponse<T>> => {
    // token 보유 여부 확인
    let token = options.token ?? tokenStore.getToken();
    return withErrorHandling( async () => {
        // 보유하지 않았으면 신규 토큰 발급
        if(!token){
            token = await callToken();
        }
        let response = await fetch(options.url, {
            method: options.method,
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` }),
                ...options.headers,
            },
            body: options.method === "GET" ? undefined : JSON.stringify(options.body),
            cache: "no-store",
        });
        // 결과코드값 확인
        // -----------------------------
        // 실패 처리 (핵심 구간)
        // -----------------------------
        let result: FetchResponse<T> = await response.json();
        if (!response.ok) {
            // 유효하지 않다면 토큰문제인지 확인
            const errorCodes = ["40101", "40102"];
            // 반환된 타입이 에러 타입인지 확인
            if (isErrorResponse(result)) {
                if (errorCodes.includes(result.errorCode)) {
                    // 토큰 재발급
                    const newToken = await callToken();
                    response = await fetch(options.url, {
                        method: options.method,
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${newToken}`,
                            ...options.headers,
                        },
                        body: options.method === "GET" ? undefined : JSON.stringify(options.body),
                        cache: "no-store",
                    });
                    result = await response.json();
                }
            }
        }
        return resolveApiResponse(result);
    })
};