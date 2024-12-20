import { data } from '../data/characters';

import type { ICharacters } from '../types';

const loadData = async (value: string): Promise<ICharacters> => {
    const result = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
    );

    return new Promise((resolve) => {
        resolve(result);
    });
};

export default loadData;
