import { Highlighter } from './highlighter';

import { Code } from '@/components/ui-typography/code';

import type { FC, HTMLAttributes } from 'react';

type CodeWrapperProps = HTMLAttributes<HTMLElement>;

const CodeWrapper: FC<CodeWrapperProps> = ({ children, className }) => {
    const match = /language-(\w+)/.exec(className || '');

    const language = match ? match[1] : null;

    return match ? (
        <Highlighter language={language}>{children}</Highlighter>
    ) : (
        <Code>{children}</Code>
    );
};

export default CodeWrapper;
