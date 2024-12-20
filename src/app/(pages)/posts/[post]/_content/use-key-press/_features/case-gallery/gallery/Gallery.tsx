'use client';

import { useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Square } from '@/components/ui-examples/square';
import { Kbd } from '@/components/ui-examples/kbd';

import { Message } from '@/components/ui-typography-examples/message';

import { loadData } from '@/fake-api/items';

import { useKeyPress } from '@/hooks/use-key-press';

import type { FC } from 'react';

const KEY_PREV = 'ArrowLeft';
const KEY_NEXT = 'ArrowRight';

const initialItemId = 1;

const items = loadData(4);

const Gallery: FC = () => {
    const [currentItem, setCurrentItem] = useState(initialItemId);

    const handlePrev = () => {
        if (currentItem === 1) return;

        setCurrentItem((prev) => prev - 1);
    };

    const handleNext = () => {
        if (currentItem === items.length) return;

        setCurrentItem((prev) => prev + 1);
    };

    useKeyPress(KEY_PREV, handlePrev);
    useKeyPress(KEY_NEXT, handleNext);

    return (
        <Layer title="Gallery">
            <div className="flex flex-col gap-2">
                <Square className="pointer-events-none font-monoBrand text-6xl font-bold">
                    <span>{currentItem}</span>
                </Square>
                <div className="flex w-full space-x-2">
                    {items.map((item) => (
                        <Square
                            className="pointer-events-none"
                            key={item.id}
                            colored={currentItem === item.id}
                        >
                            <span className="font-monoBrand text-3xl font-bold">
                                {item.id}
                            </span>
                        </Square>
                    ))}
                </div>
            </div>
            <Message>
                <span>Press one of the following keys on your keyboard:</span>
                <div className="flex space-x-4 py-2">
                    <Kbd id={KEY_PREV} />
                    <Kbd id={KEY_NEXT} />
                </div>
            </Message>
        </Layer>
    );
};

export default Gallery;
