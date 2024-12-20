import { cn } from '@/helpers/cn';

import type { FC, HTMLAttributes } from 'react';

type H4Props = HTMLAttributes<HTMLHeadingElement>;

const H4: FC<H4Props> = ({ className, children }) => {
    return (
        <h4
            className={cn(
                'scroll-m-20 text-base font-semibold tracking-tight md:text-lg',
                className
            )}
        >
            {children}
        </h4>
    );
};

export default H4;
