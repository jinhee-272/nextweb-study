import {errorLog} from "@/server/common/api/exception/LogUtil";
import {ApiException, HttpException, NetworkException, SystemException} from "@/server/common/api/exception/ExceptionType";

export const withErrorHandling = async <T>(callback: () => Promise<T>): Promise<T> => {
        try {
            return await callback();
        }
        catch(error) {
            //API 예외
            if (error instanceof ApiException) {
                errorLog(error);
                throw error;
            }
            //HTTP 예외
            if (error instanceof HttpException) {
                errorLog(error);
                throw error;
            }
            //네트워크 예외
            if (error instanceof TypeError && error.message.includes('fetch')) {
                const networkError = new NetworkException('NETWORK_ERROR', 'API 서버 연결에 실패했습니다.');
                errorLog(networkError);
                throw error;
            }
            //예외처리 추가 필요
            // 1. 에러도 제네릭<T>
            console.log(error);
            const systemError = new SystemException('SYSTEM_ERROR', error instanceof Error ? error.message : '알 수 없는 오류가 발생하였습니다.');
            errorLog(systemError);
            throw systemError;
        }
    };