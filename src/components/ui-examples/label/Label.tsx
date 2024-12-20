import type { FC, HTMLAttributes } from 'react';

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
}

const Label: FC<LabelProps> = ({ children }) => {
    return (
        <span className="flex h-6 w-fit items-center justify-start rounded-lg bg-blue-400 px-2 py-1 font-monoBrand">
            {children}
        </span>
    );
};

Label.displayName = 'Example.Label';

export default Label;
