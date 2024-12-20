import type { FC, HTMLAttributes } from 'react';

type EmProps = HTMLAttributes<HTMLEmbedElement>;

const Em: FC<EmProps> = ({ children }) => {
    return <em className="text-sm">{children}</em>;
};

export default Em;
