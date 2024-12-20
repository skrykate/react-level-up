import type { IThemes } from '@/types/preferences';

export const _APP_THEME_IDS = {
    light: 'light',
    dark: 'dark',
};

export const _APP_THEMES: IThemes = [
    {
        id: _APP_THEME_IDS.light,
        name: 'Light',
        default: true,
    },
    {
        id: _APP_THEME_IDS.dark,
        name: 'Dark',
    },
];

export const _APP_THEME_DEFAULT =
    _APP_THEMES.find((theme) => theme.default)?.id || _APP_THEME_IDS.light;
