import { Inter, Space_Mono, Source_Code_Pro } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const spaceMono = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-space-mono',
});

export const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-source-code-pro',
});
