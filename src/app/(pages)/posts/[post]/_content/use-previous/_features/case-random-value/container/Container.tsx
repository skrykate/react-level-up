'use client';

import { useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';

import { Text } from '@/components/ui-typography-examples/text';
import { Message } from '@/components/ui-typography-examples/message';

import { generateRandomValue } from '@/helpers/generate-random-value';

import { usePrevious } from '@/hooks/use-previous';

import type { FC } from 'react';

const Container: FC = () => {
    const [value, setValue] = useState(0);

    const prevValue = usePrevious(value);

    const handleClick = () => {
        const randomValue = generateRandomValue();

        setValue(randomValue);
    };

    const isDifferenceEven = prevValue ? (value - prevValue) % 2 === 0 : null;

    return (
        <Layer title="Container">
            <Message>If the difference is even, the Emoji will appear.</Message>
            <Text>
                Current Value: {value}
                <br />
                Previous Value: {prevValue !== null ? prevValue : 'null'}
                <br />
                Difference even: {isDifferenceEven ? 'Yes 😊!' : 'No'}
            </Text>
            <div className="flex w-full justify-center">
                <Button onClick={handleClick}>Generate random value</Button>
            </div>
        </Layer>
    );
};

export default Container;
