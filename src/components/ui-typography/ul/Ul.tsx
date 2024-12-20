import { cn } from '@/helpers/cn';

import type { FC, HTMLAttributes } from 'react';

type UlProps = HTMLAttributes<HTMLUListElement>;

const Ul: FC<UlProps> = ({ children, className }) => {
    return (
        <ul className={cn("flex list-disc flex-col space-y-2", className)}>
            {children}
        </ul>
    );
};

export default Ul;