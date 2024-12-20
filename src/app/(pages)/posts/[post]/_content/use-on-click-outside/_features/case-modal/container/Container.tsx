'use client';

import { useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';

import { ModalWrapper } from './modal-wrapper';

import type { FC } from 'react';

const Container: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    return (
        <Layer title="Container">
            <div className="flex w-full justify-center">
                <Button onClick={handleOpen}>Open Modal</Button>
            </div>
            {isOpen && <ModalWrapper onClose={handleClose} />}
        </Layer>
    );
};

export default Container;
