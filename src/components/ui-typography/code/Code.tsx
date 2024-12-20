import { cn } from '@/helpers/cn';

import type { FC, HTMLAttributes } from 'react';

type CodeProps = HTMLAttributes<HTMLElement>;

const Code: FC<CodeProps> = ({ children, ...props }) => {
    return (
        <code
            className="rlu__bg-decoration relative rounded-md px-2 py-px font-monoBrand text-sm text-neutral-500 dark:text-neutral-300"
            {...props}
        >
            {children}
        </code>
    );
};

export default Code;
