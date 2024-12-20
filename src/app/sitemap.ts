import { _APP_ROUTE_HOME, _APP_ROUTE_POST } from '@/constants/routes';

import units from '@/app/_data/config.json';

import type { MetadataRoute } from 'next';

import type { IPostsConfig } from '@/types/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const data: IPostsConfig = units?.data || [];

    const sitemap: MetadataRoute.Sitemap = [
        {
            url: _APP_ROUTE_HOME,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ];

    Object.keys(data).forEach((level) => {
        data[level].posts.forEach((post) => {
            sitemap.push({
                url: _APP_ROUTE_POST(post.id),
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 1,
            });
        });
    });

    return sitemap;
}
