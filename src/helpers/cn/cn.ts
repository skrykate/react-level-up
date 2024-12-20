import { twMerge } from 'tailwind-merge';

import { clsx } from 'clsx';

import type { ClassValue } from 'clsx';

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export default cn;
