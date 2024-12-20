import { _APP_METADATA, _APP_NAME } from '@/constants/main';

import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    const { description } = _APP_METADATA;

    return {
        name: _APP_NAME,
        short_name: _APP_NAME,
        description,
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '48x48',
                type: 'image/x-icon',
            },
            {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    };
}
