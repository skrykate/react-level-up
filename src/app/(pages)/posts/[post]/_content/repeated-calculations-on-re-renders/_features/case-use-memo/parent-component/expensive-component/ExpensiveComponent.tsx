'use client';

import { useMemo, useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';

import { Text } from '@/components/ui-typography-examples/text';

import { ChildComponent } from './child-component';

import { emulateSlowCode } from '@/helpers/emulate-slow-code';

import type { FC } from 'react';

interface ExpensiveComponentProps {
    value: number;
    useMemoVersion?: boolean;
}

const ExpensiveComponent: FC<ExpensiveComponentProps> = ({
    value,
    useMemoVersion = false,
}) => {
    console.log('ExpensiveComponent --- Render');

    const [isOpen, setIsopen] = useState(false);

    const computeValue = () => {
        console.log('computeValue is computing');

        emulateSlowCode(1000);

        return value * 2;
    };

    const memoizedValue = useMemo(() => {
        console.log('computeValue is computing');

        emulateSlowCode(1000);

        return value * 2;
    }, [value]);

    const computedValue = useMemoVersion ? memoizedValue : computeValue();

    const handleToggle = () => {
        setIsopen((prev) => !prev);
    };

    return (
        <Layer
            title="Expensive"
            colored
        >
            <Text>Computed value: {computedValue}</Text>
            <div className="flex w-full justify-center">
                <Button onClick={handleToggle}>
                    {isOpen ? 'Close' : 'Open'}
                </Button>
            </div>
            {isOpen && <ChildComponent />}
        </Layer>
    );
};

export default ExpensiveComponent;
