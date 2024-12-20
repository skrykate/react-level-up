import { data } from '../data/users';

import type { IUsers } from '../types';

const loadData = async (): Promise<IUsers> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(data);
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
};

export default loadData;
