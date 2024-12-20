import { cn } from '@/helpers/cn';

import type { FC, ReactNode } from 'react';

interface EditorProps {
    children?: ReactNode;
    blured?: boolean;
}

const Editor: FC<EditorProps> = ({ children, blured = true }) => {
    return (
        <div
            className={cn(
                'rlu__corner rlu__shadow flex flex-col',
                blured ? 'bg-slate-900/80 backdrop-blur' : 'bg-slate-900'
            )}
        >
            <div className="flex h-10 w-20 items-center justify-center space-x-1.5 px-3">
                <div className="relative h-3 w-3 rounded-full bg-slate-600 before:absolute before:-left-5 before:top-0 before:h-3 before:w-3 before:rounded-full before:bg-slate-600 after:absolute after:-right-5 after:top-0 after:h-3 after:w-3 after:rounded-full after:bg-slate-600" />
            </div>
            <div className="w-full border-t border-slate-500/30">
                {children}
            </div>
        </div>
    );
};

export default Editor;
