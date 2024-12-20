import { _APP_NAME, _APP_NAME_PREFIX } from '@/constants/main';
import { _APP_ROUTE_POST } from '@/constants/routes';

import { getPostMetadata } from '../_data/getPostMetadata';

import type { Metadata, ResolvingMetadata } from 'next';
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import type { Twitter } from 'next/dist/lib/metadata/types/twitter-types';

interface PageParams {
    params: {
        post: string;
    };
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
}

export const generateMetadata = async (
    { params }: PageParams,
    parent: ResolvingMetadata
): Promise<Metadata> => {
    const { post: postId } = params;

    const { title: postTitle, description } = getPostMetadata(postId);

    const parentData = await parent;

    const parentTwitter = parentData.twitter as Twitter;
    const parentOpenGraph = parentData.openGraph as OpenGraph;

    const title = `${postTitle} ${_APP_NAME_PREFIX} ${_APP_NAME}`;

    const url = _APP_ROUTE_POST(postId);

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            ...parentOpenGraph,
            url,
            title,
            description,
        },
        twitter: {
            ...parentTwitter,
            title,
            description,
        },
    };
};
