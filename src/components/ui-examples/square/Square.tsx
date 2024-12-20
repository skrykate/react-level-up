import { cn } from '@/helpers/cn';

import { getRandomColor } from '@/helpers/get-random-color';

import type { FC, ComponentProps } from 'react';

interface SquareProps extends ComponentProps<'div'> {
    colored?: boolean;
}

const Square: FC<SquareProps> = ({
    children,
    className,
    colored = false,
    ...props
}) => {
    return (
        <div
            style={{ backgroundColor: colored ? getRandomColor() : undefined }}
            className={cn(
                'rlu__text rlu__corner flex aspect-square size-full items-center justify-center bg-white dark:bg-black',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Square;
