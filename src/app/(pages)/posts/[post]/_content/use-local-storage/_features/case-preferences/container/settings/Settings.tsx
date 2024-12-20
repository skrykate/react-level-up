'use client';

import { defaultPreferences, textColors, bgColors } from '../../config';

import { Counter } from '@/components/ui-examples/counter';
import { Label } from '@/components/ui-examples/label';

import { ColorOption } from './color-option';

import { useLocalStorage } from '@/hooks/use-local-storage';

import type { FC } from 'react';

const Settings: FC = () => {
    const [fontSize, setFontSize] = useLocalStorage<number>(
        'fontSize',
        defaultPreferences.fontSize
    );

    const [selectedBgColor, setSelectedBgColor] = useLocalStorage<string>(
        'selectedBgColor',
        defaultPreferences.bgColor
    );

    const [selectedTextColor, setSelectedTextColor] = useLocalStorage<string>(
        'selectedColor',
        defaultPreferences.textColor
    );

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Label>Select Font Color</Label>
                <Counter
                    min={10}
                    step={2}
                    max={20}
                    value={fontSize}
                    onChange={setFontSize}
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label>Select Background Color</Label>
                <div className="flex gap-2">
                    {bgColors.map((bgColor) => (
                        <ColorOption
                            key={bgColor}
                            color={bgColor}
                            selectedColor={selectedBgColor}
                            onColorChange={setSelectedBgColor}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Label>Select Text Color</Label>
                <div className="flex flex-wrap gap-2 gap-y-4">
                    {textColors.map((textColor) => (
                        <ColorOption
                            key={textColor}
                            color={textColor}
                            selectedColor={selectedTextColor}
                            onColorChange={setSelectedTextColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Settings;
