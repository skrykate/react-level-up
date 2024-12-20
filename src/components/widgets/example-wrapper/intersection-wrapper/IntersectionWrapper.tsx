'use client';

import { useRef } from 'react';

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

import type { FC, ReactNode } from 'react';

interface ExampleContainerProps {
    children?: ReactNode;
}

const IntersectionWrapper: FC<ExampleContainerProps> = ({ children }) => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const [isIntersecting, unobserve] = useIntersectionObserver({
        element: targetRef,
    });

    if (isIntersecting) unobserve();

    return (
        <div
            className="flex w-full items-center justify-center"
            ref={targetRef}
        >
            {isIntersecting && children}
        </div>
    );
};

export default IntersectionWrapper;
