'use client';

import { forwardRef } from 'react';

import { cn } from '@/helpers/cn';

import type { ComponentProps } from 'react';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
    ({ className, placeholder = 'Type here', ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={cn(
                    'rlu__focus rlu__bg disabled:bg-400 rlu__text flex h-14 w-full min-w-40 items-center justify-center rounded-2xl border-2 border-b-[6px] border-blue-500 px-4 py-2 text-sm font-medium italic placeholder:text-neutral-400 disabled:border-neutral-500 disabled:bg-neutral-400 disabled:text-neutral-600 disabled:placeholder:text-neutral-600 dark:placeholder:text-neutral-600',
                    className
                )}
                placeholder={placeholder}
                {...props}
            />
        );
    }
);

Input.displayName = 'Example.Input';

export default Input;
