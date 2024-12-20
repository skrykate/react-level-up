import { data as questions } from '../data/questions';

import type { IQuestions } from '../types';

const loadData = (): IQuestions => {
    return questions;
};

export default loadData;
