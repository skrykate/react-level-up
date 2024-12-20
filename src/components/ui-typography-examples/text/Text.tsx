import { forwardRef } from 'react';

import { LetterText } from 'lucide-react';

import { cn } from '@/helpers/cn';

import type { HTMLAttributes } from 'react';

type TextProps = HTMLAttributes<HTMLDivElement>;

const Text = forwardRef<HTMLDivElement, TextProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'rlu__text-reversed rlu__corner flex w-full items-center gap-2 bg-neutral-900 p-4 dark:bg-neutral-100',
                    className
                )}
                {...props}
            >
                <div className="flex h-8 w-8 items-center justify-center">
                    <LetterText className="h-6 w-6" />
                </div>
                <span className="w-full font-monoBrand text-base">
                    {children}
                </span>
            </div>
        );
    }
);

Text.displayName = 'Example.Text';

export default Text;
