"use client";

import dynamic from 'next/dynamic';

interface Props {
    componentName: string;
}

export default function DynamicFooterRenderer({ componentName }: Props) {
    const DynamicComponent = dynamic(
        () => import(`../layout/footer/${componentName}`).then((mod) => mod.default),
        { ssr: false }
    );

    return <DynamicComponent />;
}