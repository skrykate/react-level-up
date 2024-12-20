'use client';

import { forwardRef } from 'react';

import { Content } from '@radix-ui/react-tooltip';

import { cn } from '@/helpers/cn';

import type { ElementRef, ComponentPropsWithoutRef } from 'react';

const TooltipContent = forwardRef<
    ElementRef<typeof Content>,
    ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
    return (
        <Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rlu__border rlu__bg rlu__text z-50 overflow-hidden rounded-md px-3 py-1.5 text-sm shadow-md',
                className
            )}
            {...props}
        />
    );
});

TooltipContent.displayName = Content.displayName;

export default TooltipContent;
