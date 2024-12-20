'use client';

import { List } from '@/components/ui-examples/list';

import { loadData } from '@/fake-api/items';

import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll';

import type { FC } from 'react';

const menuItems = loadData(20);

const Menu: FC = () => {
    useLockBodyScroll();

    const handleClick = () => {};

    return (
        <div className="absolute -top-2 left-14 w-40 p-2">
            <List
                items={menuItems}
                scrollable
                onClick={handleClick}
            />
        </div>
    );
};

export default Menu;
