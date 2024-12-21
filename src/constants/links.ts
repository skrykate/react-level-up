import { ILink } from '@/types/links';

import { _APP_AUTHOR_SKRYKATE } from './authors';
import { _APP_REPOSITORY } from './main';

export const _APP_LINKS_GITHUB: ILink = {
    name: 'GitHub',
    url: `${_APP_AUTHOR_SKRYKATE.links.github}/${_APP_REPOSITORY}`,
};

export const _APP_LINK_GITHUB_DATA_POST = (postId: string) => {
    const uri = `${_APP_LINKS_GITHUB.url}/blob/main/src/app/(pages)/posts/[post]/_content/${postId}/page.mdx`;

    return encodeURI(uri);
};
