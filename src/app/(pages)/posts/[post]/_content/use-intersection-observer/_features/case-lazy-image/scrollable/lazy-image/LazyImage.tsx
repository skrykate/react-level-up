'use client';

import { useRef } from 'react';

import { Shapes } from 'lucide-react';

import { Loader } from '@/components/ui-examples/loader';
import { Square } from '@/components/ui-examples/square';

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

import type { FC } from 'react';

const LazyImage: FC = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const [isIntersecting, unobserve] = useIntersectionObserver({
        element: targetRef,
    });

    if (isIntersecting) {
        unobserve();
    }

    return (
        <div ref={targetRef}>
            {isIntersecting ? (
                <Square colored>
                    <Shapes className="h-20 w-20" />
                </Square>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default LazyImage;
