import Link from 'next/link';

import { _APP_ROUTE_POST } from '@/constants/routes';

import type { FC } from 'react';

import type { IPost as PostsListItemProps } from '@/types/posts';

const PostsListItem: FC<PostsListItemProps> = ({ id, title }) => {
    return (
        <Link
            href={_APP_ROUTE_POST(id)}
            className="rlu__focus rlu__bg rlu__border flex items-center justify-center rounded-full px-5 py-2 text-sm shadow-md transition-all hover:scale-110 hover:font-medium focus:scale-110 focus:font-medium"
        >
            {title}
        </Link>
    );
};

export default PostsListItem;
