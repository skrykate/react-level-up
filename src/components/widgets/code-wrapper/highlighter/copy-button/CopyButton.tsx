'use client';

import { useState, useRef, useEffect } from 'react';

import { Clipboard, ClipboardCheck } from 'lucide-react';

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from '@/components/ui/tooltip';

import type { FC } from 'react';

interface CopyButtonProps {
    content: string;
}

const CopyButton: FC<CopyButtonProps> = ({ content }) => {
    const [isCopied, setIsCopied] = useState(false);

    const timeoutRef = useRef<number | null>(null);

    const handleCopyClick = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        navigator.clipboard.writeText(content).then(() => {
            setIsCopied(true);

            timeoutRef.current = window.setTimeout(() => {
                setIsCopied(false);

                timeoutRef.current = null;
            }, 3000);
        });
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="flex h-10 items-center space-x-2 rounded-lg bg-slate-600 text-xs text-white shadow-sm hover:bg-slate-400 dark:border-neutral-800">
            {isCopied && (
                <span className="pl-4 text-sm font-medium">Copied!</span>
            )}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            aria-label="Copy code"
                            className="rlu__focus rounded-lg p-2"
                            onClick={handleCopyClick}
                        >
                            {isCopied ? <ClipboardCheck /> : <Clipboard />}
                        </button>
                    </TooltipTrigger>
                    <TooltipContent
                        aria-hidden="true"
                        className="rounded-full"
                    >
                        Copy
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};

export default CopyButton;
