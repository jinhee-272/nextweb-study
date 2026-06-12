"use client";

import dynamic from 'next/dynamic';

interface Props {
    componentName: string;
}

export default function DynamicGnbRenderer({ componentName }: Props) {
    const DynamicComponent = dynamic(
        () => import(`../layout/gnb/${componentName}`).then((mod) => mod.default),
        { ssr: false }
    );

    return <DynamicComponent />;
}