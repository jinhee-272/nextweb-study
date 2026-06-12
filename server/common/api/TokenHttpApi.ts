import {FetchResponse, FetchSuccessResponse, resolveApiResponse} from "@/server/common/api/exception/ExceptionType";
import {withErrorHandling} from "@/server/common/api/exception/ExceptionHandlerUtil";
import {tokenStore} from "@/server/common/api/TokenStoreClass";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type RequestOptions = {
    method: HttpMethod;
    url: string;
    headers?: HeadersInit;
    body?: unknown;
    token?: string;
}

export const TokenHttp = async <T>(
    options: RequestOptions,
): Promise<FetchSuccessResponse<T>> => {
    return withErrorHandling( async () => {
        const token = options.token ?? tokenStore.getToken();
        const response = await fetch(options.url, {
            method: options.method,
            headers: {
                'Content-Type': 'application/json',
                ...(token && { Authorization: `Bearer ${token}`, }),
                ...options.headers,
            },
            body: options.method === 'GET' ? undefined : JSON.stringify(options.body),
            cache: 'no-store',
        });
        const result: FetchResponse<T> = await response.json();
        return resolveApiResponse(result);
    })
};
