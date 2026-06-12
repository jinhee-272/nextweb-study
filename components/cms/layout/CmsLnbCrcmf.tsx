"use client";

import Link from "next/link";
import {ApiResponse} from "@/type/cms/cmsLnb/CmsLnbType"

export default function CmsLnbCrcmf({ menuList}: { menuList: ApiResponse;
}) {
    return (
        <nav style={{ width: "250px" }}>
            <ul className="nav nav-pills flex-column mb-auto" style={{ width: "240px" }}>
                {menuList.data.map((menu) => (
                    <li key={menu.sysMenuIdntfNo} className="nav-item">
                        <Link href={menu.menuAddr} className="nav-link">
                            {menu.menuNm}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}