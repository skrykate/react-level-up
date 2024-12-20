import { _APP_HOST } from '@/constants/main';

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/',
        },
        sitemap: `${_APP_HOST}/sitemap.xml`,
    };
}
