'use client';

import { useRef } from 'react';

import { Loader } from '@/components/ui-examples/loader';

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

import type { FC } from 'react';

const AnimatedComponent: FC = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const [isIntersecting] = useIntersectionObserver({
        element: targetRef,
    });

    return (
        <div
            ref={targetRef}
            className="flex h-40 w-full items-center justify-center"
        >
            {isIntersecting && <Loader />}
        </div>
    );
};

export default AnimatedComponent;
