'use client';

import { defaultPreferences, BackgroundColors } from '../config';

import { Layer } from '@/components/ui-examples/layer';

import { Settings } from './settings';

import { useLocalStorage } from '@/hooks/use-local-storage';

import { cn } from '@/helpers/cn';

import type { FC } from 'react';

const Container: FC = () => {
    const [fontSize] = useLocalStorage<number>(
        'fontSize',
        defaultPreferences.fontSize
    );

    const [selectedBgColor] = useLocalStorage<string>(
        'selectedBgColor',
        defaultPreferences.bgColor
    );

    const [selectedTextColor] = useLocalStorage<string>(
        'selectedColor',
        defaultPreferences.textColor
    );

    const style = {
        fontSize: fontSize,
        color: selectedTextColor,
    };

    return (
        <Layer title="Container">
            <Settings />
            <div
                style={style}
                className={cn(
                    'rounded-lg p-4',
                    selectedBgColor === BackgroundColors.Dark
                        ? `bg-gray-500`
                        : 'bg-white'
                )}
            >
                <span>
                    My font size and colors depend on your choice, and it will
                    also be saved even if you close the tab.
                </span>
            </div>
        </Layer>
    );
};

export default Container;
