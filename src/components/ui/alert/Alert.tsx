import { forwardRef } from 'react';

import { cn } from '@/helpers/cn';

import type { HTMLAttributes } from 'react';

const Alert = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            role="alert"
            className={cn(
                'rlu__border rlu__bg-blured rlu__text relative flex w-full items-center space-x-4 rounded-lg p-4',
                className
            )}
            {...props}
        />
    )
);

Alert.displayName = 'Alert';

export default Alert;
