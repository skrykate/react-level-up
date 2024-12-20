import { forwardRef } from 'react';

import { cn } from '@/helpers/cn';

import type { HTMLAttributes } from 'react';

const AlertContent = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-col space-y-2 text-sm', className)}
        {...props}
    />
));

AlertContent.displayName = 'AlertContent';

export default AlertContent;
