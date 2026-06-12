import { HttpFetch } from "@/server/common/api/HttpApi";
import {EnvUtil} from "@/server/common/api/EnvUtil";
import {ApiResponse} from "@/type/cms/cmsLnb/CmsLnbType";


export async function getMenuList() {
    const result = await HttpFetch<ApiResponse>({
        method: "POST",
        url: `${EnvUtil.URL}/api/v1/sysMenu/list`,
        body: {},
    });

   return result.rsltData;
}