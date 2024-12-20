'use client';

import { memo } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';

import { emulateSlowCode } from '@/helpers/emulate-slow-code';

import type { FC } from 'react';

interface ExpensiveComponentProps {
    onClick: () => void;
    increment: number;
}

const ExpensiveComponent: FC<ExpensiveComponentProps> = ({
    onClick: handleClick,
    increment,
}) => {
    console.log('ExpensiveComponent --- Render');

    emulateSlowCode(500);

    return (
        <Layer
            title="Expensive"
            colored
        >
            <div className="flex w-full justify-center">
                <Button onClick={handleClick}>
                    Increment value by {increment}
                </Button>
            </div>
        </Layer>
    );
};

export default memo(ExpensiveComponent);
