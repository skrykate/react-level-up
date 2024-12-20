import { CodeNotice } from './_features/code-notice';
import { Footer } from './_features/footer';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { H1 } from '@/components/ui-typography/h1';

import {
    dynamicParams,
    generateStaticParams,
} from './_data/generateStaticParams';
import { getPostData } from './_data/getPostData';

import { generateMetadata } from './_meta/generateMetadata';

export { generateMetadata, generateStaticParams, dynamicParams };

interface PagePostProps {
    params: {
        post: string;
    };
}

export default function PagePost({ params }: PagePostProps) {
    const { post: postId } = params;

    const { title, section, last_updated_date, flags, Content } =
        getPostData(postId);

    const { showCodeNotice } = flags;

    return (
        <Card className="w-full space-y-4">
            <CardHeader className="relative items-center space-y-4 pt-12">
                <span className="rlu__shadow flex h-8 items-center justify-center rounded-full bg-gradient-to-br from-brand to-secondary px-4 font-monoBrand text-base text-white">
                    {section}
                </span>
                <H1 className="text-center">{title}</H1>
                {showCodeNotice && (
                    <>
                        <Separator className="w-12" />
                        <CodeNotice />
                    </>
                )}
                <Separator className="w-12" />
            </CardHeader>
            <CardContent className="flex w-full flex-col justify-center space-y-10 md:px-10">
                <Content />
            </CardContent>
            <CardFooter className="flex w-full flex-col justify-center space-y-6 pb-12">
                <Separator className="w-12" />
                <Footer
                    id={postId}
                    date={last_updated_date}
                />
            </CardFooter>
        </Card>
    );
}
