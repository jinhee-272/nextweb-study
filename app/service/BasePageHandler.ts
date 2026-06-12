'use client';

import React, {useRef} from 'react';
import { LayoutType, ProgramData, layoutTypeMap,} from '@/type/BasePageType';
import {handleAPI} from "@/server/BasePageApi";

type Props = {
    programData: ProgramData | null;
    setProgramData: React.Dispatch<React.SetStateAction<ProgramData | null>>;
};

function getNextLayout(currentLayoutType: LayoutType): LayoutType
{
    let changeType: LayoutType = 'A';
    const layoutArr = Object.keys(layoutTypeMap);
    let idx = layoutArr.indexOf(currentLayoutType);
    if(idx !== -1 ){
        idx = (idx == layoutArr.length-1) ? 0 : idx+1;
        changeType = layoutArr[idx] as LayoutType;
    }

    return changeType;
}

// use로 시작해야 React Hook으로 인식됨 'React~ 사용가능'
export function useProgramActions({programData, setProgramData}: Props) {
    const currentLayoutType = (programData?.layoutType ?? 'A') as LayoutType;
    const prevLayoutType = useRef(['']); //  추후 저장길이 제한(초과 시 old del? - 미정)
    const { handleSearch } = handleAPI();

    const handleSubmit = React.useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
            const submitType = submitter?.value;
            const formData = new FormData( e.currentTarget );
            let searchLayoutType = currentLayoutType;

            // 이전화면
            if (submitType === 'prev') {
                searchLayoutType = prevLayoutType.current.pop() as LayoutType;
            }
            // 화면이동
            else {
                prevLayoutType.current.push(currentLayoutType);
                searchLayoutType = getNextLayout(currentLayoutType);
                if(submitType !== 'next') {
                    formData.append('submitData', 'Y');
                }
            }
            formData.append('layoutType', searchLayoutType);
            const layoutData = await handleSearch(formData);

            if(layoutData == null){
                setProgramData({
                    header: layoutTypeMap[searchLayoutType].header,
                    footer: layoutTypeMap[searchLayoutType].footer,
                    layoutType: searchLayoutType,
                    container: layoutTypeMap[searchLayoutType].container,
                });
            }else{
                setProgramData({
                    header: layoutData.header,
                    footer: layoutData.footer,
                    layoutType: searchLayoutType,
                    container: layoutData.container,
                });
            }
        }
            ,
        [currentLayoutType, handleSearch, setProgramData]
    );

    React.useEffect(() => {
        if (!programData) { // 첫 화면 랜딩 시 데이터 없는 경우 A타입 호출
            const formData = new FormData();
            formData.append('layoutType', currentLayoutType);
            handleSearch(formData);
        }
    }, [ programData, currentLayoutType, handleSearch,]);

    return {currentLayoutType, handleSubmit,};
}

