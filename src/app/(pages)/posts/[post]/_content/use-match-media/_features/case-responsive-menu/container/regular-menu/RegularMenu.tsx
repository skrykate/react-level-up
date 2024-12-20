import { List } from '@/components/ui-examples/list';

import { loadData } from '@/fake-api/items';

import type { FC } from 'react';

const menuItems = loadData(3);

const RegularMenu: FC = () => {
    const handleClick = () => {};

    return (
        <List
            items={menuItems}
            horizontal
            onClick={handleClick}
        />
    );
};

export default RegularMenu;
