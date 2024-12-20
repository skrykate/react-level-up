import { Editor } from '@/components/branding/editor';

import type { FC } from 'react';

interface BlockAboutProps {
    content: string;
}

const Description: FC<BlockAboutProps> = ({ content }) => {
    return (
        <>
            <span className="sr-only">Section Description</span>
            <Editor>
                <p className="px-6 py-4 font-monoBrand text-slate-400">
                    <span aria-hidden="true">/&#42;</span> {content}{' '}
                    <span aria-hidden="true"> &#42;/</span>
                </p>
            </Editor>
        </>
    );
};

export default Description;
