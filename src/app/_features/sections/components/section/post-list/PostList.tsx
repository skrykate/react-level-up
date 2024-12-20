import { PostsListItem } from './post-list-item';

import { cn } from '@/helpers/cn';

import type { FC } from 'react';

import type { IPosts } from '@/types/posts';

interface PostsListProps {
    posts: IPosts;
    reversed: boolean;
}

const PostList: FC<PostsListProps> = ({ posts, reversed = false }) => {
    return (
        <div
            className={cn(
                'rlu__bg-dotted rlu__corner flex flex-wrap gap-4 border p-4',
                reversed && 'justify-end'
            )}
        >
            {posts.map((post) => (
                <PostsListItem
                    key={post.id}
                    {...post}
                />
            ))}
        </div>
    );
};

export default PostList;
