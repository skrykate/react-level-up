'use client';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';

import { Text } from '@/components/ui-typography-examples/text';

import { loadData } from '@/fake-api/articles';

import { useToggle } from '@/hooks/use-toggle';

import type { FC } from 'react';

const longText = loadData(3).join(' ');

const shortTextVersion = `${longText.slice(0, 50)}...`;

const Container: FC = () => {
    const [isExpanded, handleToggleExpansion] = useToggle();

    return (
        <Layer title="Container">
            <Text>{isExpanded ? longText : shortTextVersion}</Text>
            <div className="flex w-full justify-center">
                <Button onClick={handleToggleExpansion}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </Button>
            </div>
        </Layer>
    );
};

export default Container;
