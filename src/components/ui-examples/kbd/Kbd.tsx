import { useKeyPress } from '@/hooks/use-key-press';

import { cn } from '@/helpers/cn';

import type { FC } from 'react';

interface KbdProps {
    id: string;
}

const Kbd: FC<KbdProps> = ({ id }) => {
    const isPressed = useKeyPress(id);

    return (
        <kbd
            className={cn(
                'flex h-10 items-center rounded-md rounded-t-xl border border-gray-300 bg-white px-2 py-1 font-monoBrand text-sm text-gray-900 shadow-sm transition-all',
                isPressed
                    ? 'translate-y-1.5 shadow-none'
                    : 'shadow-[0_6px_0_0_#d1d5db]'
            )}
        >
            {id}
        </kbd>
    );
};

Kbd.displayName = 'Example.Kbd';

export default Kbd;
