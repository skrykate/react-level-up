import type { FC, ReactNode } from 'react';

interface ContentWrapperProps {
    children: ReactNode;
}
const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
    return <div className="flex flex-col space-y-6">{children}</div>;
};

export default ContentWrapper;
