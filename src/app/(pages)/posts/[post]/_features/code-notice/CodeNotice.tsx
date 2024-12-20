import { Terminal } from 'lucide-react';

import type { FC } from 'react';

const CodeNotice: FC = () => {
    return (
        <div className="rlu__bg rlu__corner rlu__shadow rlu__border flex max-w-xl space-x-4 p-6">
            <div
                aria-hidden="true"
                className="h-6 w-6"
            >
                <Terminal />
            </div>
            <span className="font-monoBrand text-sm">
                The code provided in this article is simplified as much as
                possible to avoid overwhelming the reader with code and to
                convey the essence of the problem and its solution. In
                interactive examples, heading tags (`h1...h6`) are replaced with
                span tags to prevent potential conflicts with the main page
                structure.
            </span>
        </div>
    );
};

export default CodeNotice;
