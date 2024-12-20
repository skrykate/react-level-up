'use client';

import { useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';

import { Text } from '@/components/ui-typography-examples/text';

import { ExpensiveComponent } from './expensive-component';

import type { FC } from 'react';

interface ParentComponentProps {
    useMemoVersion: boolean;
}

const initialValue = 23;

const increment = 3;

const ParentComponent: FC<ParentComponentProps> = ({ useMemoVersion }) => {
    const [value, setValue] = useState(initialValue);

    const handleChangeIncrement = () => {
        setValue((prev) => prev + increment);
    };

    return (
        <Layer
            title="Parent"
            colored
        >
            <Text>Value: {value}</Text>
            <div className="flex w-full justify-center">
                <Button onClick={handleChangeIncrement}>+ {increment}</Button>
            </div>
            {value !== initialValue && (
                <ExpensiveComponent
                    value={value}
                    useMemoVersion={useMemoVersion}
                />
            )}
        </Layer>
    );
};

export default ParentComponent;
