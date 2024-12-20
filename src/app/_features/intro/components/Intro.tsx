import { _APP_AUTHOR_SKRYKATE } from '@/constants/authors';
import { _APP_ROUTE_NAMES } from '@/constants/routes';

import { About } from './about';

import { LogoBig } from '@/components/branding/logo-big';
import { Cat } from '@/components/branding/cat';
import { Pipes } from '@/components/branding/pipes';

import type { FC } from 'react';

const Intro: FC = () => {
    return (
        <div className="relative w-full">
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                <div className="hidden items-center justify-center md:order-2 md:block lg:p-8">
                    <LogoBig />
                </div>
                <div className="relative z-20 flex flex-col md:order-1">
                    <About />
                </div>
            </div>
            <div className="absolute bottom-0 left-10 z-10 hidden md:block">
                <Pipes />
            </div>
            <div className="absolute -bottom-48 right-16 z-30 hidden lg:block">
                <Cat />
            </div>
        </div>
    );
};

export default Intro;
