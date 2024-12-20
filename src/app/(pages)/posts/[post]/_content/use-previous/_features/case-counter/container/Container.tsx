'use client';

import { useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Text } from '@/components/ui-typography-examples/text';
import { Counter } from '@/components/ui-examples/counter';

import { usePrevious } from '@/hooks/use-previous';

import type { FC } from 'react';

const Container: FC = () => {
    const [count, setCount] = useState(1);

    const prevCount = usePrevious(count);

    const prevValue = prevCount !== null ? prevCount : 'null';

    return (
        <Layer title="Container">
            <Text>
                Current value: {count}
                <br />
                Previous value: {prevValue}
            </Text>
            <Counter
                min={1}
                max={9}
                value={count}
                onChange={setCount}
            />
        </Layer>
    );
};

export default Container;
