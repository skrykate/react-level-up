import { cn } from '@/helpers/cn';

import type { IItem } from '../types';

interface ListItemProps<T extends IItem> {
    item: T;
    horizontal: boolean;
    selected?: IItem['id'];
    onClick?: (item: T) => void;
}

const ListItem = <T extends IItem>({
    item,
    horizontal,
    selected, 
    onClick,
}: ListItemProps<T>) => {
    const isSelected = selected === item.id;

    const handleClick = () => {
        if (!onClick) return;

        onClick(item);
    };

    return (
        <li
            className={cn(
                horizontal
                    ? 'first:rounded-l-xl last:rounded-r-xl'
                    : 'first:rounded-t-xl last:rounded-b-xl',
                'w-full px-4 py-2 text-blue-500 flex space-x-2 items-center',
                onClick && 'cursor-pointer hover:bg-blue-300 active:bg-blue-200'
            )}
            onClick={handleClick}
        >
            {isSelected && <div className="w-2 h-2 rounded-full bg-blue-500" />}
            <span>{item.name}</span>
        </li>
    );
};

ListItem.displayName = 'Example.ListItem';

export default ListItem;
