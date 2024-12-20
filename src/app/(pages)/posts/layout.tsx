import { Pipes } from '@/components/branding/pipes';

import type { ReactNode } from 'react';

export default function LayoutPosts({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <div className="relative">
            <div className="absolute left-1/2 -z-10 hidden -translate-x-1/2 md:-top-40 md:block">
                <Pipes />
            </div>
            {children}
        </div>
    );
}
