import type { FC, HTMLAttributes } from 'react';

type BlockquoteProps = HTMLAttributes<HTMLElement>;

const Blockquote: FC<BlockquoteProps> = ({ children }) => {
    return (
        <div className="flex w-full items-center justify-center">
            <blockquote className="rlu__corner border-l-4 border-sky-500 bg-sky-100/50 p-4 text-base italic text-sky-800 shadow-xl dark:bg-sky-950/50 dark:text-sky-200 md:w-2/3">
                {children}
            </blockquote>
        </div>
    );
};

export default Blockquote;
