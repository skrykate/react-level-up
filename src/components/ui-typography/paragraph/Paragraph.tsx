import { cn } from '@/helpers/cn';

import type { FC, HTMLAttributes } from 'react';

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

const Paragraph: FC<ParagraphProps> = ({ className, children }) => {
    return <p className={cn('text-base', className)}>{children}</p>;
};

export default Paragraph;
