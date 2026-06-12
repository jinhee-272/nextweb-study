export type CmsLnbMenuType = {
    sysMenuIdntfNo: number;
    menuNm: string;
    menuLv: number;
    menuSortSeq: number;
    menuAddr: string;
};


export type ApiResponse = {
    data: CmsLnbMenuType[];
};
