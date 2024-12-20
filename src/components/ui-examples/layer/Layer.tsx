import { getRandomColor } from '@/helpers/get-random-color';

import { cn } from '@/helpers/cn';

import type { FC, HTMLAttributes } from 'react';

interface LayerProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    colored?: boolean;
}

const Layer: FC<LayerProps> = ({
    title,
    children,
    className,
    colored = false,
    ...props
}) => {
    const backgroundColor = colored ? getRandomColor() : undefined;

    return (
        <div
            style={{ backgroundColor }}
            className={cn(
                'rlu__corner relative w-full border-2 border-b-[6px] border-neutral-900 bg-neutral-100 p-6 shadow-xl dark:border-neutral-100 dark:bg-neutral-900',
                title && 'pt-6',
                className
            )}
            {...props}
        >
            {title && (
                <span className="rlu__text-reversed absolute -top-4 left-4 flex h-6 items-center justify-center rounded-md bg-neutral-900 px-2 text-base dark:bg-neutral-100">
                    {title}
                </span>
            )}
            <div className="flex flex-col gap-4">{children}</div>
        </div>
    );
};

Layer.displayName = 'Example.Layer';

export default Layer;
