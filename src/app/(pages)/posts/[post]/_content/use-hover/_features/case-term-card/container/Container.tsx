'use client';

import { useRef } from 'react';

import { Layer } from '@/components/ui-examples/layer';

import { Text } from '@/components/ui-typography-examples/text';

import { useHover } from '@/hooks/use-hover';

import type { FC } from 'react';

const term = {
    title: '"Closure"',
    discription: `A closure is the combination of a function bundled together 
		(enclosed) with references to its surrounding state (the lexical environment).`,
};

const Container: FC = () => {
    const elementRef = useRef<HTMLDivElement | null>(null);

    const isCardHovered = useHover(elementRef);

    return (
        <Layer title="Container">
            <Text
                ref={elementRef}
                className="h-48"
            >
                {isCardHovered ? term.discription : term.title}
            </Text>
        </Layer>
    );
};

export default Container;
