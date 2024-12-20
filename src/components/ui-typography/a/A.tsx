import Link from 'next/link';

import { cn } from '@/helpers/cn';

import type { AnchorHTMLAttributes, FC } from 'react';

type AProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    inner?: boolean;
    href: string;
};

const A: FC<AProps> = ({
    children,
    target = '_blank',
    className,
    inner = false,
    ...props
}) => {
    const Comp = inner ? Link : 'a';

    return (
        <Comp
            target={target}
            className={cn(
                'rlu__focus font-bold underline decoration-brand decoration-2 focus-visible:rounded-sm',
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    );
};

export default A;
