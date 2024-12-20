'use client';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';
import { List } from '@/components/ui-examples/list';

import { loadData } from '@/fake-api/items';

import { useToggle } from '@/hooks/use-toggle';

import type { FC } from 'react';

const menuItems = loadData(3);

const Container: FC = () => {
    const [isOpen, handleToggleMenu] = useToggle();

    return (
        <Layer title="Container">
            <div className="flex w-full justify-center">
                <Button onClick={handleToggleMenu}>
                    {isOpen ? 'Close Menu' : 'Open Menu'}
                </Button>
            </div>
            {isOpen && (
                <List
                    items={menuItems}
                    onClick={() => {}}
                />
            )}
        </Layer>
    );
};

export default Container;
