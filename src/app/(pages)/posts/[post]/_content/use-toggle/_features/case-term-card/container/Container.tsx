'use client';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';

import { Text } from '@/components/ui-typography-examples/text';

import { useToggle } from '@/hooks/use-toggle';

import type { FC } from 'react';

const term = {
    title: '"Closure"',
    discription: `A closure is the combination of a function bundled together 
		(enclosed) with references to its surrounding state (the lexical environment).`,
};

const Container: FC = () => {
    const [isTitleView, handleToggleCard] = useToggle(true);

    return (
        <Layer title="Container">
            <div className="flex w-full justify-center">
                <Button onClick={handleToggleCard}>
                    Show {isTitleView ? 'description' : 'term title'}
                </Button>
            </div>
            <Text className="h-48">
                {isTitleView ? term.title : term.discription}
            </Text>
        </Layer>
    );
};

export default Container;
