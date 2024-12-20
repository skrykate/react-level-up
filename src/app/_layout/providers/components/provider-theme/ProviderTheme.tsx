'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { _APP_THEME_DEFAULT, _APP_THEME_IDS } from '@/constants/preferences';
import { _APP_STORAGE_THEME } from '@/constants/main';

import type { FC } from 'react';

import type { ThemeProviderProps } from 'next-themes/dist/types';

const settings: Omit<ThemeProviderProps, 'children'> = {
    themes: Object.values(_APP_THEME_IDS),
    storageKey: _APP_STORAGE_THEME,
    defaultTheme: _APP_THEME_DEFAULT,
    enableSystem: false,
    attribute: 'class',
    disableTransitionOnChange: true,
};

const Provider: FC<ThemeProviderProps> = ({ children, ...props }) => {
    return (
        <NextThemesProvider
            {...props}
            {...settings}
        >
            {children}
        </NextThemesProvider>
    );
};

export default Provider;
