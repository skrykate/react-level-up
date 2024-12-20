import { useState, useEffect, useLayoutEffect, useRef } from 'react';

const useKeyPress = (targetKey: string, handler?: () => void): boolean => {
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    const latestHandler = useRef(handler ?? null);

    useLayoutEffect(() => {
        if (handler) {
            latestHandler.current = handler;
        }
    }, [handler]);

    useEffect(() => {
        const downHandler = ({ key }: KeyboardEvent) => {
            if (key === targetKey) {
                setIsKeyPressed(true);

                if (latestHandler.current) {
                    latestHandler.current();
                }
            }
        };

        const upHandler = ({ key }: KeyboardEvent) => {
            if (key === targetKey) {
                setIsKeyPressed(false);
            }
        };

        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, [targetKey]);

    return isKeyPressed;
};

export default useKeyPress;
