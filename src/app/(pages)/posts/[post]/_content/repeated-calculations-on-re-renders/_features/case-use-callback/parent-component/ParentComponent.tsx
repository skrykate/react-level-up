'use client';

import { useCallback, useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Label } from '@/components/ui-examples/label';
import { Counter } from '@/components/ui-examples/counter';

import { Text } from '@/components/ui-typography-examples/text';

import { ExpensiveComponent } from './expensive-component';

import type { FC } from 'react';

interface ParentComponentProps {
    useCallbackVersion: boolean;
}

const initialValue = 23;

const initialIncrement = 1;

const ParentComponent: FC<ParentComponentProps> = ({ useCallbackVersion }) => {
    const [value, setValue] = useState(initialValue);

    const [increment, setIncrement] = useState(initialIncrement);

    const handleChangeIncrement = (value: number) => {
        setIncrement(value);
    };

    const memoizedHandler = useCallback(() => {
        setValue((prev) => prev + increment);
    }, [increment]);

    const regularHandler = () => {
        setValue((prev) => prev + increment);
    };

    const handleIncrementByIncrement = useCallbackVersion
        ? memoizedHandler
        : regularHandler;

    return (
        <Layer
            title="Parent"
            colored
        >
            <div className="flex flex-col gap-2">
                <Label>Increment</Label>
                <Counter
                    min={1}
                    max={9}
                    value={increment}
                    onChange={handleChangeIncrement}
                />
            </div>
            <Text>Value: {value}</Text>
            {(value !== initialValue || increment !== initialIncrement) && (
                <ExpensiveComponent
                    onClick={handleIncrementByIncrement}
                    increment={increment}
                />
            )}
        </Layer>
    );
};

export default ParentComponent;
