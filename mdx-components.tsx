import { H2 } from '@/components/ui-typography/h2';
import { H3 } from '@/components/ui-typography/h3';
import { H4 } from '@/components/ui-typography/h4';
import { Paragraph } from '@/components/ui-typography/paragraph';
import { Em } from '@/components/ui-typography/em';
import { Ol } from '@/components/ui-typography/ol';
import { Ul } from '@/components/ui-typography/ul';
import { Blockquote } from '@/components/ui-typography/blockquote';
import { A } from '@/components/ui-typography/a';

import { Table } from '@/components/ui/table';

import { PostLink } from '@/components/widgets/post-link';
import { ContentWrapper } from '@/components/widgets/content-wrapper';
import { CodeWrapper } from '@/components/widgets/code-wrapper';
import { PreWrapper } from '@/components/widgets/pre-wrapper';
import { ExampleWrapper } from '@/components/widgets/example-wrapper';

import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
    h2: (props) => <H2 {...props} />,
    h3: (props) => (
        <H3
            {...props}
            className="px-2 md:px-8"
        />
    ),
    h4: (props) => (
        <H4
            {...props}
            className="px-2 md:px-8"
        />
    ),
    p: (props) => (
        <Paragraph
            {...props}
            className="px-2 md:px-8"
        />
    ),
    em: (props) => <Em {...props} />,
    ol: (props) => (
        <Ol
            {...props}
            className="px-6 md:px-14"
        />
    ),
    ul: (props) => (
        <Ul
            {...props}
            className="px-6 md:px-14"
        />
    ),
    blockquote: (props) => <Blockquote {...props} />,
    A,
    Table,
    ContentWrapper,
    ExampleWrapper,
    pre: (props) => <PreWrapper {...props} />,
    code: (props) => <CodeWrapper {...props} />,
    PostLink,
};

export function useMDXComponents(): MDXComponents {
    return components;
}
