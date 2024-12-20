import { forwardRef } from 'react';

import { cn } from '@/helpers/cn';

import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, ...props }, ref) => {
        return (
            <button
                className={cn(
                    'rlu__focus flex h-12 min-w-40 max-w-60 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 px-6 py-2 text-base font-bold italic text-blue-600 shadow-[0_6px_0_0_#3b82f6] transition-all active:translate-y-1.5 active:shadow-none disabled:pointer-events-none disabled:translate-y-0 disabled:from-neutral-400 disabled:via-neutral-300 disabled:to-neutral-200 disabled:text-neutral-600 disabled:shadow-[0_6px_0_0_#737373]',
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = 'Example.Button';

export default Button;
