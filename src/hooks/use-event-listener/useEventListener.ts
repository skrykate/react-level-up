import { useEffect, useRef, useLayoutEffect } from 'react';

import type { RefObject } from 'react';

const useEventListener = <
    WEvent extends keyof WindowEventMap,
    HEvent extends keyof HTMLElementEventMap,
    DEvent extends keyof DocumentEventMap,
    T extends HTMLElement = HTMLElement,
    EventType extends
        | WindowEventMap[WEvent]
        | HTMLElementEventMap[HEvent]
        | DocumentEventMap[DEvent] =
        | WindowEventMap[WEvent]
        | HTMLElementEventMap[HEvent]
        | DocumentEventMap[DEvent],
>(
    eventName: WEvent | HEvent | DEvent,
    handler: (event: EventType) => void,
    element?: RefObject<T> | Document
): void => {
    const latestHandler = useRef(handler);

    useLayoutEffect(() => {
        latestHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const targetElement: T | Document | Window =
            element instanceof Document
                ? element
                : (element?.current ?? window);

        if (!('addEventListener' in targetElement)) return;

        const eventListener = (event: EventType): void => {
            latestHandler.current(event);
        };

        targetElement.addEventListener(
            eventName,
            eventListener as EventListener
        );

        return () => {
            targetElement.removeEventListener(
                eventName,
                eventListener as EventListener
            );
        };
    }, [eventName, element]);
};

export default useEventListener;
