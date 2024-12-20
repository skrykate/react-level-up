'use client';

import { forwardRef, useEffect } from 'react';

import { createPortal } from 'react-dom';

import { _APP_STRUCTURE_IDS } from '@/constants/main';

import type { MouseEvent, HTMLAttributes } from 'react';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
    ({ onClose, children, ...props }, ref) => {
        const handleClick = (e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
        };

        const handleClose = () => {
            if (!onClose) return;

            onClose();
        };

        const modalRoot = document.getElementById(
            _APP_STRUCTURE_IDS.examples.modals
        );

        useEffect(() => {
            if (modalRoot) {
                const firstFocusableElement = modalRoot.querySelector('button');
                if (firstFocusableElement) firstFocusableElement.focus();
            }
        }, [modalRoot]);

        if (!modalRoot) {
            return null;
        }

        return createPortal(
            <div
                className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/50 backdrop-blur"
                onClick={handleClose}
            >
                <div
                    ref={ref}
                    className="flex w-3/4 cursor-auto flex-col items-center justify-center space-y-2 rounded-2xl bg-white p-6 md:w-96"
                    onClick={handleClick}
                    {...props}
                >
                    {children}
                </div>
            </div>,
            modalRoot
        );
    }
);

Modal.displayName = 'Example.Modal';

export default Modal;
