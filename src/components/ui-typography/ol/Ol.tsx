import { cn } from '@/helpers/cn';

import type { FC, HTMLAttributes } from 'react';

type OlProps = HTMLAttributes<HTMLOListElement>;

const Ol: FC<OlProps> = ({ children, className }) => {
    return (
        <ol className={cn("flex list-decimal flex-col space-y-2", className)}>
            {children}
        </ol>
    );
};

export default Ol;
