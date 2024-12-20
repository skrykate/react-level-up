'use client';

import { useToggle } from '@/hooks/use-toggle';

import { ToggleButton } from './toggle-button';

import { Editor } from '@/components/branding/editor';

import type { FC, HTMLAttributes } from 'react';

type PreBlockProps = HTMLAttributes<HTMLPreElement>;

const PreWrapper: FC<PreBlockProps> = ({ children }) => {
    const [isShownCode, toggleIsShownCode] = useToggle(true);

    return (
        <Editor blured={false}>
            {isShownCode && children}
            <div className="flex w-full items-center justify-center">
                <ToggleButton
                    toolTipName={isShownCode ? 'Collapse' : 'Expand'}
                    onClick={toggleIsShownCode}
                />
            </div>
        </Editor>
    );
};

export default PreWrapper;
