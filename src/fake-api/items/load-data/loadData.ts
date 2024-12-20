import type { IDataItems } from '../types';

const loadData = (length: number): IDataItems => {
    return Array.from({ length }, (_, index) => {
        const itemId = index + 1;

        return {
            id: itemId,
            name: `Item ${itemId}`,
        };
    });
};

export default loadData;
