class TokenStore {
    private token: string | null = null;

    // 토큰 저장
    setToken(token: string) {
        this.token = token;
    }

    // 토큰 조회
    getToken() {
        return this.token;
    }
}

export const tokenStore = new TokenStore();