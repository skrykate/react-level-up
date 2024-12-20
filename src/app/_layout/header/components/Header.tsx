import Link from 'next/link';

import { _APP_AUTHOR_SKRYKATE } from '@/constants/authors';
import { _APP_ROUTE_HOME, _APP_ROUTE_NAMES } from '@/constants/routes';

import { Menu } from './menu';

import { Logo } from '@/components/branding/logo';

import type { FC } from 'react';

const Header: FC = () => {
    return (
        <header className="flex h-24 items-center justify-between gap-4 px-2">
            <Link
                href={_APP_ROUTE_HOME}
                className="rlu__focus rounded-full"
                aria-label="Logo — go to the Home page"
            >
                <Logo />
            </Link>
            <Menu />
        </header>
    );
};

export default Header;
