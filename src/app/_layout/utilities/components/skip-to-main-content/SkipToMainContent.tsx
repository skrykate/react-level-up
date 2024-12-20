'use client';

import Link from 'next/link';

import { WandSparkles } from 'lucide-react';

import { _APP_STRUCTURE_IDS } from '@/constants/main';

import type { FC } from 'react';

const focusableElements =
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';

const SkipToMainContent: FC = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const target = document.getElementById(_APP_STRUCTURE_IDS.root);
        if (!target) return;

        const firstFocusableElement = target.querySelector(
            focusableElements
        ) as HTMLElement;

        if (firstFocusableElement) {
            firstFocusableElement.focus();

            return;
        }

        target.setAttribute('tabindex', '-1');
        target.focus();
        target.removeAttribute('tabindex');
    };

    return (
        <Link
            href={`#${_APP_STRUCTURE_IDS.root}`}
            className="rlu__focus rlu__border rlu__bg-blured rlu__text sr-only flex items-center space-x-2 rounded-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-10 focus:p-2"
            onClick={handleClick}
        >
            <WandSparkles
                aria-hidden="true"
                className="h-6 w-6"
            />
            <span className="h-6 w-full">Skip to main content</span>
        </Link>
    );
};

export default SkipToMainContent;
