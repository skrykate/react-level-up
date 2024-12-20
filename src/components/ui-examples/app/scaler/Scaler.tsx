'use client';

import { memo, useRef, useState, useEffect } from 'react';

import type { HTMLAttributes } from 'react';

interface ScalerProps extends HTMLAttributes<HTMLDivElement> {
    width: number;
    breakpoint: number;
}

const Scaler = ({
    width: initialWidth,
    breakpoint,
    children,
    ...props
}: ScalerProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (!containerRef.current || !containerRef.current.parentElement)
                return;

            const containerWidth =
                containerRef.current.parentElement.clientWidth;

            if (containerWidth >= initialWidth) {
                setScale(1);
                return;
            }
            const newScale = containerWidth / initialWidth;
            setScale(newScale);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [initialWidth]);

    return (
        <div
            ref={containerRef}
            style={{
                WebkitTransform: `scale(${scale})`,
                MozTransform: `scale(${scale})`,
                transform: `scale(${scale})`,
                transformOrigin: 'center',
                width: `${initialWidth}px`,
            }}
            {...props}
        >
            <div className="h-full w-full">{children}</div>
        </div>
    );
};

Scaler.displayName = 'Example.App.Scaler';

export default memo(Scaler);
