"use client"
import React from "react";
import {ContainerType} from "@/type/BasePageType";
import DynamicProgramRederer from "@/components/base/common/DynamicProgramRederer";
export default function BasicBRlm({programComponents}: ContainerType) {
    return (
        <React.Fragment>
            <div className={"row"}>
                <div
                    className={"col-5"}
                >
                    {
                        programComponents?.filter((data) => data?.containerIndex ===1)
                            .map((data, idx) => (<DynamicProgramRederer key={idx} containerIndex={data?.containerIndex} programName={data?.programName} detailObject={data?.detailObject}/>))
                    }
                </div>
                <div
                    className={"col-5"}
                >
                    {
                        programComponents?.filter((data) => data?.containerIndex ===2)
                            .map((data, idx) => (<DynamicProgramRederer key={idx} containerIndex={data?.containerIndex} programName={data?.programName} detailObject={data?.detailObject}/>))
                    }
                </div>
            </div>
        </React.Fragment>
    );
}