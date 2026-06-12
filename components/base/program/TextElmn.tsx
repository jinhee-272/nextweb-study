"use client"

import {ProgramType} from "@/type/BasePageType";
import React, {useState} from "react";

export default function TextElmn({programName,containerIndex,programKey}:ProgramType) {
    const inputKey = programKey ?? `${programName}-${containerIndex}`;

    const [value, setValue] = useState('');

    return (
        <input
            type="text"
            name={inputKey}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
        />
    );
}