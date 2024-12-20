import { useCallback, useEffect, useState } from 'react';

export enum Status {
    IDLE = 'idle',
    PENDING = 'pending',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface AsyncState<T> {
    status: Status;
    value: T | null;
    error: Error | null;
    execute: (...args: unknown[]) => Promise<void>;
}

const useAsync = <T>(
    asyncFunction: (...args: unknown[]) => Promise<T>,
    immediate = true
): AsyncState<T> => {
    const [status, setStatus] = useState<Status>(Status.IDLE);

    const [value, setValue] = useState<T | null>(null);

    const [error, setError] = useState<Error | null>(null);

    const execute = useCallback(
        async (...args: unknown[]) => {
            setStatus(Status.PENDING);

            setValue(null);

            setError(null);

            try {
                const response = await asyncFunction(...args);

                setValue(response);

                setStatus(Status.SUCCESS);
            } catch (error) {
                setError(error as Error);

                setStatus(Status.ERROR);
            }
        },
        [asyncFunction]
    );

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { execute, status, value, error };
};

export default useAsync;
