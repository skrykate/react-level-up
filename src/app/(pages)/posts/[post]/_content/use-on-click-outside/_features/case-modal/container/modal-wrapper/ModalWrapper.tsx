'use client';

import { useRef } from 'react';

import { Button } from '@/components/ui-examples/button';
import { Modal } from '@/components/ui-examples/modal';

import { Message } from '@/components/ui-typography-examples/message';

import { useOnClickOutside } from '@/hooks/use-on-click-outside';
import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll';

import type { FC } from 'react';

interface ModalProps {
    onClose: () => void;
}

const ModalWrapper: FC<ModalProps> = ({ onClose: handleClose }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(ref, handleClose);

    useLockBodyScroll();

    return (
        <Modal ref={ref}>
            <Message>
                <span>
                    Click the dark area of the screen to close the modal window.
                </span>
                <span>Or click the following button:</span>
            </Message>
            <Button onClick={handleClose}>Close Modal</Button>
        </Modal>
    );
};

export default ModalWrapper;
