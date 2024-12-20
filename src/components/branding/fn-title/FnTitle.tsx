import { cn } from '@/helpers/cn';

import type { FC, ReactNode } from 'react';

interface FnTitleProps {
    className?: string;
    children?: ReactNode;
}

const openPart = '>_ read(';
const emptyPart = 'null';
const closePart = ')';

const FnTitle: FC<FnTitleProps> = ({ className, children }) => {
    return (
        <div
            className={cn(
                'rlu__border rlu__bg rlu__text rlu__corner scroll-m-20 px-4 py-1',
                className
            )}
        >
            <h3
                aria-label={`${children} section`}
                className="font-monoBrand text-lg"
            >
                {openPart}
                <span className="font-bold text-secondary">
                    &quot;{children || emptyPart}&quot;
                </span>
                {closePart}
            </h3>
        </div>
    );
};

export default FnTitle;
