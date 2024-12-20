import { ListItem } from './list-item';

import { cn } from '@/helpers/cn';

import type { ReactNode } from 'react';

import type { IItem } from './types';

interface ListProps<T extends IItem> {
    items?: T[];
    children?: ReactNode;
    scrollable?: boolean;
    horizontal?: boolean;
    selected?: IItem['id'];
    onClick?: (item: T) => void;
}

const List = <T extends IItem>({
    items,
    scrollable = false,
    horizontal = false,
    children,
    ...props
}: ListProps<T>) => {
    if (!items || items?.length === 0) return null;

    return (
        <ul
            className={cn(
                'rlu__corner relative flex w-full divide-blue-500 border border-blue-500 bg-neutral-100 dark:bg-neutral-900',
                horizontal ? 'divide-x' : 'flex-col divide-y',
                scrollable && 'h-48 overflow-y-auto'
            )}
        >
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    horizontal={horizontal}
                    {...props}
                />
            ))}
        </ul>
    );
};

List.displayName = 'Example.List';

export default List;
