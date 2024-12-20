import { cn } from '@/helpers/cn';

import type { FC, HTMLAttributes } from 'react';

type H3Props = HTMLAttributes<HTMLHeadingElement>;

const H3: FC<H3Props> = ({ className, children }) => {
    return (
        <h3
            className={cn(
                'scroll-m-20 text-lg font-semibold tracking-tight md:text-xl',
                className
            )}
        >
            {children}
        </h3>
    );
};

export default H3;
