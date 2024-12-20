'use client';

import { forwardRef } from 'react';

import { Root } from '@radix-ui/react-separator';

import { cn } from '@/helpers/cn';

import type { ElementRef, ComponentPropsWithoutRef } from 'react';

const Separator = forwardRef<
    ElementRef<typeof Root>,
    ComponentPropsWithoutRef<typeof Root>
>(
    (
        { className, orientation = 'horizontal', decorative = true, ...props },
        ref
    ) => {
        return (
            <Root
                ref={ref}
                decorative={decorative}
                orientation={orientation}
                className={cn(
                    'rlu__bg-decoration shrink-0',
                    orientation === 'horizontal'
                        ? 'h-[1px] w-full'
                        : 'h-full w-[1px]',
                    className
                )}
                {...props}
            />
        );
    }
);

Separator.displayName = Root.displayName;

export default Separator;
