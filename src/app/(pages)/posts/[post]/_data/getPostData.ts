import dynamic from 'next/dynamic';

import { getPostMetadata } from './getPostMetadata';

import type { IPostData } from '@/types/posts';

export const getPostData = (postId: string): IPostData => {
    const data = dynamic(() => import('../_content/' + postId + '/page.mdx'));

    const metadata = getPostMetadata(postId);

    return {
        ...metadata,
        Content: data,
    };
};
