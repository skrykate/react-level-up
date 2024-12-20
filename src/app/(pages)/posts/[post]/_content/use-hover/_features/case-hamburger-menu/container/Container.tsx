'use client';

import { useRef } from 'react';

import { Menu as IconOpen, X as IconClose } from 'lucide-react';

import { Layer } from '@/components/ui-examples/layer';
import { List } from '@/components/ui-examples/list';

import { loadData } from '@/fake-api/items';

import { useHover } from '@/hooks/use-hover';

import type { FC } from 'react';

const menuItems = loadData(3);

const Container: FC = () => {
    const elementRef = useRef<HTMLDivElement | null>(null);

    const isHovered = useHover(elementRef);

    const handleClick = () => {};

    return (
        <Layer title="Container">
            <div className="flex items-center justify-center">
                <div
                    ref={elementRef}
                    className="relative"
                >
                    <div className="rlu__corner relative flex h-14 w-14 items-center justify-center bg-blue-500 text-white">
                        {isHovered ? <IconClose /> : <IconOpen />}
                    </div>
                    {isHovered && (
                        <div className="absolute -top-2 left-14 w-40 p-2">
                            <List
                                items={menuItems}
                                onClick={handleClick}
                            />
                        </div>
                    )}
                </div>
            </div>
        </Layer>
    );
};

export default Container;
