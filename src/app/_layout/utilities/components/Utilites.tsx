import { SkipToMainContent } from './skip-to-main-content';
import { CookieBanner } from './cookie-banner';

import type { FC } from 'react';

const Utilities: FC = () => {
    return (
        <>
            <SkipToMainContent />
            <CookieBanner />
        </>
    );
};

export default Utilities;
