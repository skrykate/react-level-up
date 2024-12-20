import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from '@/components/ui/tooltip';

import type { FC, HTMLAttributes } from 'react';

type ToggleButtonProps = HTMLAttributes<HTMLButtonElement> & {
    toolTipName: string;
};

const ToggleButton: FC<ToggleButtonProps> = ({ toolTipName, ...props }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger
                    asChild
                    aria-label={`${toolTipName} code block`}
                >
                    <button
                        className="rlu__focus rlu__corner relative h-8 w-24 before:absolute before:left-1/2 before:top-1/2 before:h-1 before:w-[80%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white/70 hover:opacity-50"
                        {...props}
                    />
                </TooltipTrigger>
                <TooltipContent
                    aria-hidden="true"
                    className="rounded-full"
                >
                    {toolTipName}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default ToggleButton;
