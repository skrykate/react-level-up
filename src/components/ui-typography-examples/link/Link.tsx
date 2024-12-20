import { cn } from '@/helpers/cn';

import { forwardRef } from 'react';

import type { AnchorHTMLAttributes } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <a
                ref={ref}
                className={cn(
                    'rlu__focus rounded-md bg-blue-500/40 px-2 py-px underline decoration-white decoration-1 focus-visible:rounded-lg dark:decoration-black',
                    className
                )}
                {...props}
            >
                {children}
            </a>
        );
    }
);

Link.displayName = 'Example.Link';

export default Link;
