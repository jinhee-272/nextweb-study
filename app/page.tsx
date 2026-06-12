// app/page.tsx (또는 검색 컴포넌트)
'use client';

import React, {useState} from 'react';
import {layoutTypeMap, ProgramData} from "@/type/BasePageType";
import DynamicPage from "@/components/base/DynamicPage";
import {useProgramActions} from "@/app/service/BasePageHandler";


export default function SearchPage() {
    const [programData, setProgramData] = useState<ProgramData | null>(layoutTypeMap['A']);
    const { handleSubmit } = useProgramActions({
        programData,
        setProgramData,
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <DynamicPage programData={programData}/>
            </form>
        </div>
    );
}