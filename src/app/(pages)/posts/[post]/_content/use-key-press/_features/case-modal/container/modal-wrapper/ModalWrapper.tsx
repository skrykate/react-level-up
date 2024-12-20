'use client';

import { Button } from '@/components/ui-examples/button';
import { Kbd } from '@/components/ui-examples/kbd';
import { Modal } from '@/components/ui-examples/modal';

import { Message } from '@/components/ui-typography-examples/message';

import { useKeyPress } from '@/hooks/use-key-press';
import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll';

import type { FC } from 'react';

interface ModalProps {
    onClose: () => void;
}

const KEY_CLOSE = 'Escape';

const ModalWrapper: FC<ModalProps> = ({ onClose: handleClose }) => {
    useKeyPress(KEY_CLOSE, handleClose);

    useLockBodyScroll();

    return (
        <Modal>
            <Message>
                <span>
                    Press the following key on your keyboard to close the modal
                    window:
                </span>
                <Kbd id={KEY_CLOSE} />
                <span>Or click the following button:</span>
            </Message>
            <Button onClick={handleClose}>Close Modal</Button>
        </Modal>
    );
};

export default ModalWrapper;
