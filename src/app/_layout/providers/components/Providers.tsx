import { ProviderTheme } from './provider-theme';
import { ProviderLoader } from './provider-loader';

import type { FC } from 'react';

interface ProvidersProps {
    readonly children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <ProviderTheme>
            <ProviderLoader />
            {children}
        </ProviderTheme>
    );
};

export default Providers;
