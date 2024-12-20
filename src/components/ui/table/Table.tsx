import { TableBodyItem } from './table-body-item';
import { TableHeadItem } from './table-head-item';

import type { FC } from 'react';

interface TableProps {
    tableContent: {
        headerItems: string[];
        bodyItems: {
            head: string;
            cells: string[];
        }[];
    };
}

const Table: FC<TableProps> = ({ tableContent }) => {
    const { headerItems, bodyItems } = tableContent;

    return (
        <div className="rlu__shadow rlu__corner overflow-x-auto border border-neutral-200 text-left text-sm dark:border-neutral-800">
            <table>
                <thead>
                    <tr>
                        {headerItems.map((headerItem, index) => (
                            <TableHeadItem key={index}>
                                {headerItem}
                            </TableHeadItem>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {bodyItems.map((bodyItem, index) => (
                        <TableBodyItem
                            key={index}
                            {...bodyItem}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
