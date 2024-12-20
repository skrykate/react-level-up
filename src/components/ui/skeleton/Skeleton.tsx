import { cn } from '@/helpers/cn';

import type { FC, HTMLAttributes } from 'react';

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => {
    return (
        <div
            className={cn('rlu__bg-decoration animate-pulse', className)}
            {...props}
        />
    );
};

export default Skeleton;
