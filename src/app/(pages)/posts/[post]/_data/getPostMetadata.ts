import path from 'node:path';
import fs from 'node:fs';

import type { IPostMetadata } from '@/types/posts';

export const getPostMetadata = (postId: string): IPostMetadata => {
    const directoryPath = path.join(
        process.cwd(),
        'src',
        'app',
        '(pages)',
        'posts',
        '[post]',
        '_content',
        postId
    );
    const filePath = path.join(directoryPath, 'data.json');

    const data = fs.readFileSync(filePath, 'utf8');

    const normalizedData: IPostMetadata = JSON.parse(data);

    return normalizedData;
};
