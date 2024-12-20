import { data as text } from '../data/text';

import type { IParagraphs } from '../types';

const loadData = (length: number): IParagraphs => {
    return Array.from({ length }, (_) => text);
};

export default loadData;
