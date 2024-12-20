'use client';

import { useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';

import { Text } from '@/components/ui-typography-examples/text';

import { getRandomColor } from '@/helpers/get-random-color';

import { usePrevious } from '@/hooks/use-previous';

import type { FC } from 'react';

const Container: FC = () => {
    const [currentColor, setCurrentColor] = useState('hsl(303, 70%, 100%)');

    const prevColor = usePrevious(currentColor);

    const handleClick = () => {
        const randomColor = getRandomColor();

        setCurrentColor(randomColor);
    };

    return (
        <Layer title="Container">
            <Text>
                Current:{' '}
                <span style={{ color: currentColor }}>{currentColor}</span>
                <br />
                Previous:{' '}
                <span style={{ color: prevColor ?? 'white' }}>
                    {prevColor ?? currentColor}
                </span>
            </Text>
            <div className="flex w-full justify-center">
                <Button onClick={handleClick}>Generate random color</Button>
            </div>
        </Layer>
    );
};

export default Container;
