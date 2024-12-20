import { Code } from 'bright';

import theme from '@/config/bright/syntax-theme.json';

import { CopyButton } from './copy-button';

import type { FC, HTMLAttributes } from 'react';

interface CodeWrapperProps extends HTMLAttributes<HTMLElement> {
    language: string | null;
}

const Highlighter: FC<CodeWrapperProps> = ({ children, language }) => {
    return (
        <div className="relative flex flex-col">
            <span className="sr-only">Code implementation</span>
            <Code
                style={{ margin: '0px' }}
                className="text-sm md:text-base"
                theme={theme}
                lang={language || 'typescript'}
                lineNumbers
            >
                {children}
            </Code>
            <div className="absolute -top-4 right-4">
                <CopyButton content={String(children)} />
            </div>
        </div>
    );
};

export default Highlighter;
