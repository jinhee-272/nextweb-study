'use client';

import {ProgramData} from "@/type/BasePageType";
import React from "react";
import DynamicGnbRenderer from "@/components/base/common/DynamicGnbRederer";
import DynamicContainerRenderer from "@/components/base/common/DynamicContainerRederer";
import DynamicFooterRenderer from "@/components/base/common/DynamicFooterRederer";

type Props = {
    programData: ProgramData | null;
};
export default function DynamicPage({programData}: Props) {

    const header = programData?.header ?? 'GnbBasicACrcmf';
    const footer = programData?.footer ?? 'FooterBasicACrcmf';

    return (
        <>
            <DynamicGnbRenderer componentName={header}/>
                <React.Fragment>
                <main className={"col-md-9 ms-sm-auto col-lg-10 px-md-4"}>
                    {programData?.container.map((con, index) => (
                        <DynamicContainerRenderer key={index} containerName={con?.containerName} programComponents={con?.programComponents}/>
                    ))}
                </main>
                </React.Fragment>

            <DynamicFooterRenderer componentName={footer}/></>
    );
}