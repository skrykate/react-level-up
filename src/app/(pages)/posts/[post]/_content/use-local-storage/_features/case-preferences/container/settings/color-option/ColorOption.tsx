import { cn } from '@/helpers/cn';

import type { FC } from 'react';

interface ColorOptionProps {
    color: string;
    selectedColor: string;
    onColorChange: (color: string) => void;
}

const ColorOption: FC<ColorOptionProps> = ({
    color,
    selectedColor,
    onColorChange,
}) => {
    const handleChange = () => {
        if (selectedColor === color) return;

        onColorChange(color);
    };

    return (
        <button
            key={color}
            style={{ backgroundColor: color }}
            onClick={handleChange}
            className={cn(
                'rlu__focus rlu__corner h-12 w-12 cursor-pointer overflow-hidden transition-all active:translate-y-1.5 active:shadow-none',
                selectedColor === color
                    ? 'translate-y-1.5 shadow-none'
                    : 'translate-y-0 shadow-[0_6px_0_0_#3b82f6]'
            )}
        />
    );
};

export default ColorOption;
