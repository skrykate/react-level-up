import { _APP_ROUTE_POST } from '@/constants/routes';

import { A } from '@/components/ui-typography/a';

import type { FC, ReactNode } from 'react';

interface PostLinkProps {
    id: string;
    children: ReactNode;
}

const PostLink: FC<PostLinkProps> = ({ id, children }) => {
    return (
        <A
            inner={true}
            href={_APP_ROUTE_POST(id)}
        >
            {children}
        </A>
    );
};

export default PostLink;
