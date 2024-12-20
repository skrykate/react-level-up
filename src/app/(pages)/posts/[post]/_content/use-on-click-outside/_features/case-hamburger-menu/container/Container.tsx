'use client';

import { useRef, useState } from 'react';

import { Menu as IconOpen, X as IconClose } from 'lucide-react';

import { Layer } from '@/components/ui-examples/layer';
import { List } from '@/components/ui-examples/list';

import { loadData } from '@/fake-api/items';

import { useOnClickOutside } from '@/hooks/use-on-click-outside';

import type { FC } from 'react';

const menuItems = loadData(3);

const Container: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef<HTMLDivElement | null>(null);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleClick = () => {};

    useOnClickOutside(ref, handleClose, isOpen);

    return (
        <Layer title="Container">
            <div className="flex items-center justify-center">
                <div
                    className="relative w-14"
                    ref={ref}
                >
                    <button
                        onClick={handleToggle}
                        className="rlu__focus rlu__corner relative flex h-14 w-14 items-center justify-center bg-blue-500 text-white"
                    >
                        {isOpen ? <IconClose /> : <IconOpen />}
                    </button>
                    {isOpen && (
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
