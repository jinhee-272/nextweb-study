
export const layoutTypeMap = {
    A: {
        layoutType : 'A',
        header: 'GnbBasicACrcmf',
        footer: 'FooterBasicACrcmf',
        container: [
            {
                containerName : 'BasicARlm',
                programComponents : [
                    {
                        programName : 'Jumbotron'
                        ,programKey : 'A-1-1'
                        ,containerIndex : 1
                        ,detailObject : {}
                    }
                ]
            },
            {
                containerName : 'BasicBRlm',
                programComponents : [
                    {
                        programName : 'Button'
                        ,programKey : 'A-2-1'
                        ,containerIndex : 1
                        ,detailObject : {value :'next',eventName:'다음'}
                    },
                    {
                        programName : 'Text'
                        ,programKey : 'A-2-2'
                        ,containerIndex : 2
                        ,detailObject : { value: 'test'}
                    }
                ]
            }
        ]
        ,
    },
    B: {
        layoutType : 'B',
        header: 'GnbBasicBCrcmf',
        footer: 'FooterBasicBCrcmf',
        container: [
            {
                containerName : 'BasicARlm',
                programComponents : [
                    {
                        programName : 'Jumbotron'
                        ,programKey : 'B-1-1'
                        ,containerIndex : 1
                        ,detailObject : {}
                    }
                    ,{
                        programName : 'RadioListGroup'
                        ,containerIndex : 1
                        ,detailObject : {}
                    }
                ]
            },
            {
                containerName : 'BasicARlm',
                programComponents : [
                    {
                        programName : 'Dropdown1'
                        ,programKey : 'B-2-1'
                        ,containerIndex : 1
                        ,detailObject : {}
                    },
                    {
                        programName : 'Dropdown2'
                        ,programKey : 'B-2-2'
                        ,containerIndex : 1
                        ,detailObject : {}
                    },
                    {
                        programName : 'Button'
                        ,programKey : 'B-2-3'
                        ,containerIndex : 1
                        ,detailObject : {value :'prev' ,eventName:'이전'
                        }
                    },
                    {
                        programName : 'Button'
                        ,programKey : 'B-2-4'
                        ,containerIndex : 1
                        ,detailObject : {value :'submit',eventName:'저장'}
                    },
                ]
            }
        ]
        ,
    },
    C: {
        layoutType : 'C',
        header: 'GnbBasicBCrcmf',
        footer: 'FooterBasicACrcmf',
        container: [
            {
                containerName : 'BasicBRlm',
                programComponents : [
                    {
                        programName : 'Jumbotron'
                        ,programKey : 'C-1-1'
                        ,containerIndex : 1
                        ,detailObject : {}
                    }
                    ,{
                        programName : 'RadioListGroup'
                        ,programKey : 'C-1-2'
                        ,containerIndex : 2
                        ,detailObject : {}
                    }
                ]
            },
            {
                containerName : 'BasicBRlm',
                programComponents : [
                    {
                        programName : 'Jumbotron'
                        ,programKey : 'C-2-1'
                        ,containerIndex : 2
                        ,detailObject : {}
                    }
                    ,{
                        programName : 'RadioListGroup'
                        ,programKey : 'C-2-2'
                        ,containerIndex : 1
                        ,detailObject : {}
                    },
                    {
                        programName : 'Button'
                        ,programKey : 'C-2-3'
                        ,containerIndex : 2
                        ,detailObject : {value :'prev',eventName:'이전'}
                    },
                    {
                        programName : 'Button'
                        ,programKey : 'C-2-4'
                        ,containerIndex : 2
                        ,detailObject : {value :'next',eventName:'다음'}
                    },
                ]
            }
        ],
    },
    D: {
        layoutType : 'D',
        header: 'GnbBasicACrcmf',
        footer: 'FooterBasicBCrcmf',
        container: [
            {
                containerName : 'BasicBRlm',
                programComponents : [
                    {
                        programName : 'Jumbotron'
                        ,programKey : 'D-1-1'
                        ,containerIndex : 1
                        ,detailObject : {}
                    }
                    ,{
                        programName : 'RadioListGroup'
                        ,programKey : 'D-1-2'
                        ,containerIndex : 2
                        ,detailObject : {}
                    },
                    {
                        programName : 'Button'
                        ,programKey : 'D-1-3'
                        ,containerIndex : 2
                        ,detailObject : {value :'prev',eventName:'이전'}
                    },
                    {
                        programName : 'Button'
                        ,programKey : 'D-1-4'
                        ,containerIndex : 2
                        ,detailObject : {value : 'save',eventName:'저장'}
                    },
                ]
            },
            {
                containerName : 'BasicARlm',
                programComponents : [
                    {
                        programName : 'Jumbotron'
                        ,programKey : 'D-2-1'
                        ,containerIndex : 1
                        ,detailObject : {}
                    }
                    ,{
                        programName : 'RadioListGroup'
                        ,programKey : 'D-2-2'
                        ,containerIndex : 1
                        ,detailObject : {}
                    }
                ]
            }
        ],
    },
} ;

export type ProgramContextType = {
    programData: ProgramData | null
    setProgramData: React.Dispatch<React.SetStateAction<ProgramData | null>>;
};

export type ProgramData = {
    container: ContainerType[];
    header: string;
    footer: string;
    layoutType: string;
};

export type ContainerType = {
    containerName : string;
    programComponents: ProgramType[];
}

export type ProgramType = {
    programName: string;
    programKey? : string;
    containerIndex: number;
    detailObject : {
        value?: string;
        eventName?: string;
    };
}

export type LayoutType = keyof typeof layoutTypeMap;