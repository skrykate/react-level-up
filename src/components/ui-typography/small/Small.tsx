import { cn } from '@/helpers/cn';

import type { FC, HTMLAttributes } from 'react';

type SmallProps = HTMLAttributes<HTMLDivElement>;

const Small: FC<SmallProps> = ({ className, children }) => {
    return (
        <small className={cn('text-xs leading-4 text-neutral-500', className)}>
            {children}
        </small>
    );
};

export default Small;
