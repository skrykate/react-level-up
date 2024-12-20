'use client';

import { useTheme } from 'next-themes';

import { MoonStar, Sun } from 'lucide-react';

import { _APP_THEME_IDS, _APP_THEMES } from '@/constants/preferences';

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from '@/components/ui/tooltip';

import { cn } from '@/helpers/cn';

import type { FC } from 'react';

const items = _APP_THEMES.map((theme) => ({
    ...theme,
    icon:
        theme.id === _APP_THEME_IDS.dark ? (
            <MoonStar
                aria-hidden="true"
                className="h-6 w-6"
            />
        ) : (
            <Sun
                aria-hidden="true"
                className="h-6 w-6"
            />
        ),
}));

const ThemeSwitcher: FC = () => {
    const { theme: currentTheme, setTheme } = useTheme();

    const handleChange = () => {
        setTheme(
            currentTheme === _APP_THEME_IDS.dark
                ? _APP_THEME_IDS.light
                : _APP_THEME_IDS.dark
        );
    };

    return (
        <TooltipProvider>
            <div className="rlu__bg rlu__border rlu__shadow relative flex h-12 w-24 items-center justify-center space-x-2 rounded-full">
                {items.map((item) => (
                    <Tooltip key={item.id}>
                        <TooltipTrigger
                            asChild
                            aria-label={item.name}
                        >
                            <button
                                onClick={handleChange}
                                className={cn(
                                    'rlu__focus flex h-10 w-10 items-center justify-center rounded-full',
                                    currentTheme === item.id &&
                                        'rlu__text-reversed bg-brand'
                                )}
                            >
                                {item.icon}
                            </button>
                        </TooltipTrigger>
                        <TooltipContent
                            aria-hidden="true"
                            className="rounded-full"
                        >
                            {item.name}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default ThemeSwitcher;
