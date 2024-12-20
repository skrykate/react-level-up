import type { FC } from 'react';

interface TableBodyItemProps {
    head: string;
    cells: string[];
}

const TableBodyItem: FC<TableBodyItemProps> = ({ head, cells }) => {
    return (
        <tr>
            <th className="rlu__border w-1/3 border border-b-0 border-l-0 bg-neutral-200/50 px-4 py-2 dark:bg-neutral-800/50">
                {head}
            </th>
            {cells.map((cell, index) => (
                <td
                    key={index}
                    className="rlu__border border border-b-0 p-4 first:border-l-0 first:border-t-0 last:border-r-0"
                >
                    {cell}
                </td>
            ))}
        </tr>
    );
};

export default TableBodyItem;
