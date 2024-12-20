import posts from '@/app/_data/config.json';

import { Section } from './section';

import { Pipes } from '@/components/branding/pipes';

import { cn } from '@/helpers/cn';

import type { FC } from 'react';

import type { IPostsConfig } from '@/types/posts';

const Sections: FC = () => {
    const data: IPostsConfig = posts?.data || {};

    const sections = Object.keys(data).map((title, index) => ({
        title,
        data: data[title],
        reversed: index % 2 === 0,
    }));

    return (
        <div className="flex flex-col">
            <h2 className="sr-only">Main Learning Sections</h2>
            {sections.map((section) => (
                <div
                    key={section.title}
                    className="relative flex w-full flex-col"
                >
                    <div
                        className={cn(
                            'relative flex px-10',
                            section.reversed ? 'justify-start' : 'justify-end'
                        )}
                    >
                        <Pipes />
                    </div>
                    <Section {...section} />
                </div>
            ))}
        </div>
    );
};

export default Sections;
