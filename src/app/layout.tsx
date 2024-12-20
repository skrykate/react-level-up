import './globals.css';

import { Suspense } from 'react';

import { _APP_STRUCTURE_IDS } from '@/constants/main';

import { viewport } from './_meta/viewport';
import { inter, spaceMono, sourceCodePro } from './_meta/fonts';
import { metadata } from './_meta/metadata';

import { Providers } from './_layout/providers';
import { Utilities } from './_layout/utilities';
import { Scripts } from './_layout/scripts';
import { Header } from './_layout/header';

import Loading from './loading';

import { cn } from '@/helpers/cn';

export { metadata, viewport };

export default function LayoutRoot({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body
                className={cn(
                    inter.variable,
                    spaceMono.variable,
                    sourceCodePro.variable
                )}
            >
                <Providers>
                    <Utilities />
                    <div className="flex min-h-full w-full max-w-5xl flex-col space-y-6 px-2 py-6 md:px-6">
                        <Header />
                        <main
                            className="relative h-full w-full"
                            id={_APP_STRUCTURE_IDS.root}
                        >
                            <Suspense fallback={<Loading />}>
                                {children}
                            </Suspense>
                        </main>
                    </div>
                    <div id={_APP_STRUCTURE_IDS.examples.modals} />
                </Providers>
            </body>
            <Scripts />
        </html>
    );
}
