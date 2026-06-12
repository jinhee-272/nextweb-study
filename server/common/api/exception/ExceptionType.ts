/* Fetch 성공 반환 타입 */
export type FetchSuccessResponse<T> = {
    rsltCd: string;
    rsltNm: string;
    rsltMsg: string;
    rsltData: T;
}
/* Fetch 실패 반환 타입 */
export type FetchErrorResponse = {
    status: number;
    detail: string;
    title: string;
    type: string;
    errorCode: string;
    errorNm: string;
    errorMsg: string;
}

export type FetchResponse<T> = | FetchSuccessResponse<T> | FetchErrorResponse;

export const isSuccessResponse = <T> (response: FetchResponse<T>): response is FetchSuccessResponse<T> => {
    return ('rsltCd' in response);
};

export const isErrorResponse = <T>(response: FetchResponse<T>,): response is FetchErrorResponse => {
    return ('errorCode' in response);
};

export const resolveApiResponse = <T>(response: FetchResponse<T>): FetchSuccessResponse<T> => {
    //성공 응답
    if (isSuccessResponse(response)) {
        return response;
    }
    throw new ApiException(response);
};

//API Exception
export class ApiException extends Error {
    constructor(
        public response: FetchErrorResponse
    ) {
        super(response.errorMsg);
        this.name = 'ApiException';
    }
}

export class HttpException extends Error {
    constructor(
        public status: number,
        public code: string,
        public httpMessage: string,
    ) {
        super(httpMessage);
        this.name = 'HttpException';
    }
}

export class NetworkException extends Error {
    constructor(
        public code: string,
        public networkMessage: string,
    ) {
        super(networkMessage);
        this.name = 'NetworkException';
    }
}

export class SystemException extends Error {
    constructor(
        public code: string,
        public systemMessage: string,
    ) {
        super(systemMessage);
        this.name = 'SystemException';
    }
}