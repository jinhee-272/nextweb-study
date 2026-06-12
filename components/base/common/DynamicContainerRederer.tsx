"use client";

import dynamic from 'next/dynamic';
import { ContainerType } from '@/type/BasePageType';


export default function DynamicContainerRenderer({ containerName,programComponents }: ContainerType) {
    const DynamicComponent = dynamic<ContainerType>(
        () => import(`../container/${containerName}`).then((mod) => mod.default),
        { ssr: false }
    );

    return <DynamicComponent  containerName={containerName} programComponents={programComponents}  />;
}