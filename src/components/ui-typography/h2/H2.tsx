import { cn } from '@/helpers/cn';

import type { FC, HTMLAttributes } from 'react';

type H2Props = HTMLAttributes<HTMLHeadingElement>;

const H2: FC<H2Props> = ({ className, children }) => {
    return (
        <h2
            className={cn(
                'scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl',
                className
            )}
        >
            {children}
        </h2>
    );
};

export default H2;
