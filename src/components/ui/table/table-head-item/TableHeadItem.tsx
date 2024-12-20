import type { FC } from 'react';

interface TableHeadItemProps {
    children: React.ReactNode;
}

const TableHeadItem: FC<TableHeadItemProps> = ({ children }) => {
    return (
        <th className="rlu__border w-1/3 border-t-0 bg-neutral-200/50 px-4 py-2 first:border-l-0 last:border-r-0 dark:bg-neutral-800/50">
            {children}
        </th>
    );
};

export default TableHeadItem;
