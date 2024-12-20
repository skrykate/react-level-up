import { useEffect, useRef, useReducer } from 'react';

enum Status {
    IDLE = 'idle',
    FETCHING = 'fetching',
    FETCHED = 'fetched',
    ERROR = 'error',
}

type ActionTypes = Exclude<Status, Status.IDLE>;

export interface State {
    status: Status;
    errorMessage: string;
    data: unknown;
}

interface Action {
    type: ActionTypes;
    payload?: unknown;
}

const initialState: State = {
    status: Status.IDLE,
    errorMessage: '',
    data: [],
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case Status.FETCHING:
            return { ...state, status: Status.FETCHING };
        case Status.FETCHED:
            return { ...state, status: Status.FETCHED, data: action.payload };
        case Status.ERROR:
            return {
                ...state,
                status: Status.ERROR,
                errorMessage: action.payload as string,
            };
        default:
            return state;
    }
};

const useFetch = (url: string): State => {
    const cacheRef = useRef<{ [key: string]: unknown }>({});

    const abortControllerRef = useRef<AbortController | null>(null);

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        let cancelRequest = false;

        if (!url || !url.trim()) return;

        const fetchData = async (): Promise<void> => {
            dispatch({ type: Status.FETCHING });

            if (cacheRef.current[url]) {
                const data = cacheRef.current[url];

                dispatch({ type: Status.FETCHED, payload: data });
            } else {
                try {
                    const controller = new AbortController();
                    abortControllerRef.current = controller;

                    const response = await fetch(url, {
                        signal: controller.signal,
                    });

                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }

                    const data = await response.json();

                    cacheRef.current[url] = data;

                    if (cancelRequest) return;

                    dispatch({ type: Status.FETCHED, payload: data });
                } catch (error) {
                    if (cancelRequest) return;

                    const message =
                        error instanceof Error ? error.message : String(error);

                    dispatch({
                        type: Status.ERROR,
                        payload: message,
                    });
                }
            }
        };

        fetchData();

        return (): void => {
            cancelRequest = true;

            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [url]);

    return state;
};

export default useFetch;
