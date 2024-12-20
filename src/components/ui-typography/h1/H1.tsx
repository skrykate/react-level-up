import { cn } from '@/helpers/cn';

import type { FC, HTMLAttributes } from 'react';

type H1Props = HTMLAttributes<HTMLHeadingElement>;

const H1: FC<H1Props> = ({ className, children, ...props }) => {
    return (
        <h1
            className={cn(
                'scroll-m-20 text-2xl font-semibold tracking-tight md:text-3xl',
                className
            )}
            {...props}
        >
            {children}
        </h1>
    );
};

export default H1;
