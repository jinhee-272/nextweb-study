"use client";

import {ProgramType} from "@/type/BasePageType";
import dynamic from "next/dynamic";

const programComponentMap = {
    Jumbotron: dynamic<ProgramType>(() => import("../program/./JumbotronElmn"), { ssr: false }),
    Text: dynamic<ProgramType>(() => import("../program/./TextElmn"), { ssr: false }),
    Button: dynamic<ProgramType>(() => import("../program/./ButtonElmn"), { ssr: false }),
    Dropdown1: dynamic<ProgramType>(() => import("../program/./Dropdown1Elmn"), { ssr: false }),
    Dropdown2: dynamic<ProgramType>(() => import("../program/./Dropdown2Elmn"), { ssr: false }),
    RadioListGroup: dynamic<ProgramType>(() => import("../program/./RadioListGroupElmn"), { ssr: false }),
};

export default function DynamicProgramRederer({ programName, detailObject, containerIndex, programKey }: ProgramType) {
    const DynamicComponent = programComponentMap[programName as keyof typeof programComponentMap];

    if (!DynamicComponent) {
        return null;
    }

    return (
        <DynamicComponent
            programName={programName}
            detailObject={detailObject}
            containerIndex={containerIndex}
            programKey={programKey}
        />
    );
}