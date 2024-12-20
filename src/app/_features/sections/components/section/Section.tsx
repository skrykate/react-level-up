import { Description } from './description';
import { PostList } from './post-list';

import { FnTitle } from '@/components/branding/fn-title';

import { cn } from '@/helpers/cn';

import type { FC } from 'react';

import type { ISection } from '@/types/posts';

interface SectionProps {
    title: string;
    data: ISection;
    reversed: boolean;
}

const Section: FC<SectionProps> = ({
    title,
    data: { description, posts },
    reversed = false,
}) => {
    return (
        <div className="flex flex-col space-y-8 md:grid md:grid-cols-3 md:gap-x-2">
            <div className={reversed ? 'md:order-1' : 'md:order-2'}>
                <Description content={description} />
            </div>
            <div
                className={cn(
                    'rlu__bg-blured rlu__border rlu__shadow rlu__corner flex flex-col justify-center px-8 pb-8 pt-10 md:col-span-2',
                    reversed ? 'md:order-2' : 'md:order-1'
                )}
            >
                <FnTitle
                    className={cn(
                        'absolute -top-4',
                        reversed ? 'left-4' : 'right-4'
                    )}
                >
                    {title}
                </FnTitle>
                <PostList
                    reversed={reversed}
                    posts={posts}
                />
            </div>
        </div>
    );
};

export default Section;
