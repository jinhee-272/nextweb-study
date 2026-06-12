"use client"
import React from "react";
import {ContainerType} from "@/type/BasePageType";
import DynamicProgramRederer from "@/components/base/common/DynamicProgramRederer";


export default function BasicACrcmf({programComponents}: ContainerType) {

    return (
        <React.Fragment>
            <div
                className={"row"}
            >
                {programComponents?.map((data, index) => (
                    <DynamicProgramRederer key={index} containerIndex={data?.containerIndex} programName={data?.programName} detailObject={data?.detailObject}/>
                ))}
            </div>
        </React.Fragment>
    );
}