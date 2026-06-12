import {ApiException} from "@/server/common/api/exception/ExceptionType";

export const errorLog = (error: Error) => {
    if(error instanceof ApiException) {
        console.error([
            `[${error.name}]`,
            `[ERROR CODE] : ${error.response.errorCode}`,
            `[ERROR STATUS] : ${error.response.status}`,
            `[ERROR NAME] : ${error.response.errorNm}`,
            `[ERROR TITLE] : ${error.response.title}`,
            `[ERROR DETAIL] : ${error.response.detail}`,
            `[ERROR MESSAGE] : ${error.response.errorMsg}`,
        ].join('\n'));
        return;
    }
    console.error(error);
};