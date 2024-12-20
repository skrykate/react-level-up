import { Fragment } from 'react';

import { Text } from '@/components/ui-typography-examples/text';

import { loadData } from '@/fake-api/articles';

import type { FC } from 'react';

const paragraphs = loadData(8);

const Article: FC = () => {
    return (
        <Text>
            {paragraphs.map((paragraph) => (
                <Fragment key={paragraph}>{paragraph}</Fragment>
            ))}
        </Text>
    );
};

export default Article;
