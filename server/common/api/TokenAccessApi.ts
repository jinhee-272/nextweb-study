import {EnvUtil} from "@/server/common/api/EnvUtil";
import {CreateHmac} from "@/server/common/api/HmacUtil";
import {TokenHttp} from "@/server/common/api/TokenHttpApi";
import {tokenStore} from "@/server/common/api/TokenStoreClass";


type TokenData = {
    data: {
        token: string;
    }
}

export const callToken = async () => {
    const certEncMsg = CreateHmac(EnvUtil.CERT_KEY);
    const result = await TokenHttp<TokenData>({
        method: 'POST',
        url: `${EnvUtil.URL}/api/v1/cert/token`,
        body: {certEncMsg},
    });
    const token = result.rsltData.data.token;

    tokenStore.setToken(token);
    return token;
}

