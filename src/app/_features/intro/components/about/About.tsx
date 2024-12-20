import { _APP_ROUTE_NAMES } from '@/constants/routes';
import { _APP_AUTHOR_SKRYKATE } from '@/constants/authors';

import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';

import { A } from '@/components/ui-typography/a';

import type { FC } from 'react';

const About: FC = () => {
    return (
        <Card className="relative flex w-full flex-col items-center space-y-2 md:max-w-2xl">
            <CardTitle className="px-6 pt-6 font-monoBrand">
                👋 What is this place?
            </CardTitle>
            <CardContent>
                <CardDescription>
                    Welcome to my interactive React Development magazine!
                    I&apos;m Ekaterina Skrynnik, aka{' '}
                    <A href={_APP_AUTHOR_SKRYKATE.links.linkedin}>
                        @{_APP_AUTHOR_SKRYKATE.nickname}
                    </A>
                    . This project is more than just a blog — it&apos;s a
                    curated collection of practical knowledge, hands-on
                    examples, and real-world React tips. Explore detailed code
                    samples paired with live examples to see how concepts come
                    to life in React. These resources showcase real-world
                    functionality, with clear explanations, and provide a
                    practical understanding of the tools and patterns you can
                    use in your own projects. Let&apos;s level up your
                    development skills!
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default About;
