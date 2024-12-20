import { fontFamily } from './settings/fonts';
import { colors } from './settings/colors';
import { backgroundImage } from './settings/background';

import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/examples/**/*.{js,ts,jsx,tsx,mdx}',
        './mdx-components.tsx',
    ],
    theme: {
        extend: {
            fontFamily,
            colors,
            backgroundImage,
        },
    },
    plugins: [],
};

export default config;
