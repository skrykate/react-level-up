import { useEffect, useLayoutEffect, useRef } from 'react';

import type { RefObject } from 'react';

const useOnClickOutside = <T extends HTMLElement>(
    element: RefObject<T>,
    handler: () => void,
    attached = true
): void => {
    const latestHandler = useRef(handler);

    useLayoutEffect(() => {
        latestHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        if (!attached || !element.current) return;

        const handleClick = (e: Event) => {
            if (
                latestHandler &&
                element.current &&
                !element.current.contains(e.target as Node)
            ) {
                latestHandler.current();
            }
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [element, attached]);
};

export default useOnClickOutside;
