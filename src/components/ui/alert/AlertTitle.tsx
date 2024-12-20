import { forwardRef } from 'react';

import { cn } from '@/helpers/cn';

import type { HTMLAttributes } from 'react';

const AlertTitle = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn('font-medium leading-none tracking-tight', className)}
        {...props}
    />
));

AlertTitle.displayName = 'AlertTitle';

export default AlertTitle;
