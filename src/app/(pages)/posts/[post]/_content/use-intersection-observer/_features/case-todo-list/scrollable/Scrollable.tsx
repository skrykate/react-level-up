'use client';

import { useCallback, useRef, useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { List } from '@/components/ui-examples/list';
import { Loader } from '@/components/ui-examples/loader';

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

import type { FC } from 'react';

import type { IItems } from '@/components/ui-examples/list';

type Todo = {
    id: string;
    title: string;
};

type FetchTodosArgs = {
    onSuccess: (nextTodos: IItems) => void;
    params: { page: number };
};

const initialPage = 1;

const lastPage = 22;

const fetchTodos = ({ onSuccess, params }: FetchTodosArgs) => {
    const { page } = params;

    console.log('fetchTodos');

    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`)
        .then((response) => response.json())
        .then((json) => {
            const nextTodos: IItems = json.map((todo: Todo) => ({
                id: todo.id,
                name: `${todo.id}. ${todo.title}`,
            }));
            onSuccess(nextTodos);
        })
        .catch((error) => {
            console.error('Error fetching todos:', error);
        });
};

const Scrollable: FC = () => {
    const [todos, setTodos] = useState<IItems>([]);

    const [page, setPage] = useState(initialPage);

    const parentRef = useRef<HTMLDivElement | null>(null);

    const targetRef = useRef<HTMLDivElement | null>(null);

    const onSuccess = useCallback((newTodos: IItems) => {
        setTodos((prev) => [...prev, ...newTodos]);

        setPage((prev) => prev + 1);
    }, []);

    const [isIntersecting, unobserve] = useIntersectionObserver({
        element: targetRef,
        callback: () => {
            if (page === lastPage) {
                unobserve();
                return;
            }

            fetchTodos({
                onSuccess,
                params: {
                    page,
                },
            });
        },
        parentElement: parentRef,
        threshold: 0.3,
    });

    return (
        <Layer title="Scrollable">
            <div className="relative border-y-4 border-neutral-900 dark:border-neutral-100">
                <div
                    ref={parentRef}
                    className="flex h-80 flex-col space-y-2 overflow-y-auto p-4"
                >
                    <List items={todos} />
                    <div
                        ref={targetRef}
                        className="invisible"
                    />
                    {isIntersecting && page !== lastPage && (
                        <div className="flex w-full items-center justify-center">
                            <Loader />
                        </div>
                    )}
                </div>
            </div>
        </Layer>
    );
};

export default Scrollable;
