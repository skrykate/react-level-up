'use client';

import { useState } from 'react';
import { Menu as IconOpen, X as IconClose } from 'lucide-react';

import { Menu } from './menu';

import { Layer } from '@/components/ui-examples/layer';
import { Kbd } from '@/components/ui-examples/kbd';

import { Message } from '@/components/ui-typography-examples/message';

import { useKeyPress } from '@/hooks/use-key-press';

import type { FC } from 'react';

const KEY_CLOSE = 'Escape';

const Container: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    useKeyPress(KEY_CLOSE, handleClose);

    return (
        <Layer title="Container">
            <div className="flex items-center justify-center">
                <div className="relative w-14">
                    <button
                        onClick={handleToggle}
                        className="rlu__focus rlu__corner relative flex h-14 w-14 items-center justify-center bg-blue-500 text-white"
                    >
                        {isOpen ? <IconClose /> : <IconOpen />}
                    </button>
                    {isOpen && <Menu />}
                </div>
            </div>
            <Message>
                <span>
                    After opening the menu, you can press the following key on
                    your keyboard to close it:
                </span>
                <Kbd id={KEY_CLOSE} />
            </Message>
        </Layer>
    );
};

export default Container;
