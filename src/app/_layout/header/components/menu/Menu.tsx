import { credits } from '../../configs/config-credits';

import { _APP_AUTHOR_SKRYKATE } from '@/constants/authors';

import { ThemeSwitcher } from './theme-switcher';

import { A } from '@/components/ui-typography/a';

import type { FC } from 'react';

const Menu: FC = () => {
    return (
        <nav className="flex flex-wrap items-center gap-4">
            <ul className="flex h-10 items-center justify-center gap-x-4 gap-y-2">
                {credits.map((credit) => (
                    <li key={credit.name}>
                        <A
                            href={credit.link}
                            className="text-sm font-medium no-underline hover:underline"
                        >
                            {credit.name}
                        </A>
                    </li>
                ))}
            </ul>
            <ThemeSwitcher />
        </nav>
    );
};

export default Menu;
