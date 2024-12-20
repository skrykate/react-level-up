import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import type { RefObject } from 'react';

type UseIntersectionObserverArgs<T> = {
    element: RefObject<T>;
    callback?: () => void;
    parentElement?: RefObject<T | null> | Document;
    rootMargin?: string;
    threshold?: number | number[];
};

const useIntersectionObserver = <T extends HTMLElement>({
    element,
    callback,
    parentElement,
    rootMargin = '0%',
    threshold = 0,
}: UseIntersectionObserverArgs<T>): [boolean, () => void] => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observerRef = useRef<IntersectionObserver | null>(null);

    const latestCallback = useRef(callback ?? null);

    useLayoutEffect(() => {
        if (callback) {
            latestCallback.current = callback;
        }
    }, [callback]);

    const unobserve = () => {
        if (observerRef.current && element.current) {
            observerRef.current.unobserve(element.current);
        }
    };

    useEffect(() => {
        if (!element.current || !('IntersectionObserver' in window)) return;

        const root: Element | Document | null = parentElement
            ? parentElement instanceof Document
                ? parentElement
                : parentElement?.current
            : null;

        const finalOptions = { threshold, root, rootMargin };

        try {
            observerRef.current = new IntersectionObserver(([entry]) => {
                setIsIntersecting(entry.isIntersecting);

                if (entry.isIntersecting && latestCallback.current) {
                    latestCallback.current();
                }
            }, finalOptions);
        } catch (error) {
            console.error('Error creating IntersectionObserver:', error);
        }

        if (element.current && observerRef.current) {
            observerRef.current.observe(element.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [element, threshold, parentElement, rootMargin]);

    return [isIntersecting, unobserve];
};

export default useIntersectionObserver;
