// 환경변수 검증 함수
const getEnv = (key: string,): string => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`[ENV ERROR] 환경변수 값 누락 : ${key}`);
    }
    return value;
};

export const EnvUtil = {
    CERT_ID: getEnv('CERT_ID'),
    CERT_KEY: getEnv('CERT_KEY'),
    URL: getEnv('URL'),
};