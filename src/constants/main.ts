import type { IMetadata } from '@/types/metadata';

export const _APP_MODE = process.env.NODE_ENV;

export const _APP_HOST = process.env.NEXT_PUBLIC_URL;

export const _APP_IS_MODE_DEVELOPMENT = () => {
    return _APP_MODE === 'development';
};

export const _APP_IS_MODE_PRODUCTION = () => {
    return _APP_MODE === 'production';
};

export const _APP_IS_MODE_TEST = () => {
    return _APP_MODE === 'test';
};

export const _APP_IS_HOST_LOCAL = () => {
    return _APP_HOST?.includes('localhost');
};

export const _APP_PREFIX = '--RLU-';

export const _APP_PREFIX_EXAMPLE = 'EX-';

export const _APP_REPOSITORY = 'react-level-up';

export const _APP_GOOGLE_ANALYTICS_ID =
    process.env.NEXT_GOOGLE_ANALYTICS_ID || 'G-XYZ';

export const _APP_NAME = 'React Level Up';

export const _APP_NAME_PREFIX = '-';

export const _APP_METADATA: IMetadata = {
    title: `${_APP_NAME} ${_APP_NAME_PREFIX} Interactive React Development Magazine`,
    description:
        'Interactive React Development Magazine by Ekaterina Skrynnik, featuring hands-on examples, clear explanations, and real-world React tips to level up your skills.',
};

export const _APP_STORAGE_COOKIES_AGREEMENT = `${_APP_PREFIX}cookies-agreement`;
export const _APP_STORAGE_THEME = `${_APP_PREFIX}theme`;

export const _APP_STRUCTURE_IDS = {
    root: `${_APP_PREFIX}root`,
    examples: {
        modals: `${_APP_PREFIX}${_APP_PREFIX_EXAMPLE}modals`,
    },
};
