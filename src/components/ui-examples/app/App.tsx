import { memo } from 'react';

import { cn } from '@/helpers/cn';

import { Scaler } from './scaler';

import type { FC, HTMLAttributes } from 'react';

interface AppProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    width: number;
}

const App: FC<AppProps> = ({ title, width, children, className, ...props }) => {
    return (
        <Scaler
            width={width}
            breakpoint={720}
        >
            <div
                style={{ width }}
                className={cn(
                    'relative rounded-2xl border-2 border-b-[10px] border-neutral-900 bg-neutral-100 shadow-xl dark:border-neutral-100 dark:bg-neutral-900',
                    className
                )}
                {...props}
            >
                <span className="rlu__text-reversed rlu__corner absolute -top-6 left-1/2 flex h-10 -translate-x-1/2 items-center justify-center bg-neutral-900 px-4 text-xl dark:bg-neutral-100">
                    {title}
                </span>
                <div className="p-10">{children}</div>
            </div>
        </Scaler>
    );
};

App.displayName = 'Example.App';

export default memo(App);
