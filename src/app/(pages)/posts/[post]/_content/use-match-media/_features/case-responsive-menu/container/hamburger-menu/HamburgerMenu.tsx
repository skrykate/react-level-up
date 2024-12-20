import { useState } from 'react';

import { Menu as IconOpen, X as IconClose } from 'lucide-react';

import { List } from '@/components/ui-examples/list';

import { loadData } from '@/fake-api/items';

import type { FC } from 'react';

const menuItems = loadData(3);

const HamburgerMenu: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = () => {};

    return (
        <div className="flex items-center justify-center">
            <div className="relative w-14">
                <button
                    onClick={handleToggle}
                    className="rlu__focus rlu__corner relative flex h-14 w-14 items-center justify-center bg-blue-500 text-white"
                >
                    {isOpen ? <IconClose /> : <IconOpen />}
                </button>
                {isOpen && (
                    <div className="absolute -top-2 left-14 w-40 p-2">
                        <List
                            items={menuItems}
                            onClick={handleClick}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
export default HamburgerMenu;
