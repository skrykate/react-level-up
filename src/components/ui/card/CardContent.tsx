import { forwardRef } from 'react';

import { cn } from '@/helpers/cn';

import type { HTMLAttributes } from 'react';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('px-4 py-6 pt-0 md:px-6', className)}
            {...props}
        />
    )
);
CardContent.displayName = 'Card.Content';

export default CardContent;
