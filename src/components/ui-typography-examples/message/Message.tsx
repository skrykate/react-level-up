import { cn } from '@/helpers/cn';

import { MessageType } from './types';

import type { FC, HTMLAttributes } from 'react';

interface MessageProps extends HTMLAttributes<HTMLDivElement> {
    type?: MessageType;
}

const variants = {
    [MessageType.Info]: 'border-neutral-500 bg-neutral-400/30 text-neutral-500',
    [MessageType.Success]: 'border-green-500 bg-green-300/30 text-green-500',
    [MessageType.Error]: 'border-red-500 bg-red-300/30 text-red-500',
};

const Message: FC<MessageProps> = ({
    children,
    type = MessageType.Info,
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                'rlu__corner flex w-full flex-col flex-wrap items-center justify-center gap-2 border p-4 text-center text-sm',
                variants[type],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Message;
