"use client"

import {ProgramType} from "@/type/BasePageType";
export default function Dropdown1Elmn({programName,containerIndex,programKey,detailObject} :ProgramType) {
    return (
        <ul className="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px"
            data-bs-theme="dark">
            <li><a className="dropdown-item rounded-2 active" href="#">Action</a></li>
            <li><a className="dropdown-item rounded-2" href="#">Another action</a></li>
            <li>
                <a className="dropdown-item rounded-2" href="#">Something else here</a>
            </li>
            <li>
                <hr className="dropdown-divider"/>
            </li>
            <li><a className="dropdown-item rounded-2" href="#">Separated link</a></li>
        </ul>
    );
}