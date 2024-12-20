import posts from '@/app/_data/config.json';

import type { IPostsConfig } from '@/types/posts';

interface IStaticParam {
    post: string;
}

type IStaticParams = IStaticParam[];

export const dynamicParams = false;

export const generateStaticParams = async (): Promise<IStaticParams> => {
    const data: IPostsConfig = posts?.data || {};

    const params = [];

    for (const section in data) {
        const posts = data[section as keyof typeof data].posts;

        for (const post of posts) {
            params.push({
                post: post.id,
            });
        }
    }

    return params;
};
