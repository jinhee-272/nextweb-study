"use client"

import {ProgramType} from "@/type/BasePageType";
import React from "react";

export default function ButtonElmn({programName,containerIndex,detailObject}:ProgramType) {

    const btnVal = detailObject?.value ?? '';
    const btnEvent = detailObject?.eventName ?? '';

    return (
        <button
            className="btn btn-primary"
            value={btnVal}
            name="btnAction"
            type='submit'
        >
            {btnEvent}
        </button>
    );
}