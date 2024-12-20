import { forwardRef } from 'react';

import { cn } from '@/helpers/cn';

import type { HTMLAttributes } from 'react';

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                'rlu__border rlu__bg rlu__shadow rounded-2xl',
                className
            )}
            {...props}
        />
    )
);
Card.displayName = 'Card';

export default Card;
