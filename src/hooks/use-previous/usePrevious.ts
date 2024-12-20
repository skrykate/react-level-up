import { useEffect, useRef } from 'react';

const usePrevious = <T>(value: T): T | null => {
    const prevValueRef = useRef<T | null>(null);

    useEffect(() => {
        prevValueRef.current = value;
    }, [value]);

    return prevValueRef.current;
};

export default usePrevious;
