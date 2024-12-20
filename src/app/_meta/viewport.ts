import type { Viewport } from 'next';

export const viewport: Viewport = {
    colorScheme: 'light dark',
    themeColor: [
        {
            media: `(prefers-color-scheme: light)`,
            color: '#ffffff',
        },
        {
            media: `(prefers-color-scheme: dark)`,
            color: '#0a0a0a',
        },
    ],
};
