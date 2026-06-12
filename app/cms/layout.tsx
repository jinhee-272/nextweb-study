import CmsGnbCrcmf from "@/components/cms/layout/CmsGnbCrcmf";
import CmsLnbCrcmf from "@/components/cms/layout/CmsLnbCrcmf";
import {getMenuList} from "@/server/cms/CmsLnbApi";

export default async function Layout({children}:{children: React.ReactNode}) {
    const menuList = await getMenuList();
    return (

        <div className="d-flex flex-column vh-100 overflow-hidden">
            <CmsGnbCrcmf/>
            <div className="d-flex flex-grow-1 overflow-hidden">
                <CmsLnbCrcmf menuList={menuList} />
                <main className="flex-grow-1 bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center">
                    {children ?? (
                        <div className="fs-1 fw-bold text-dark">
                            Contents 영역
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
