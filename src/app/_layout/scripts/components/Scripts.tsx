import { _APP_IS_HOST_LOCAL, _APP_IS_MODE_DEVELOPMENT } from '@/constants/main';

import { ScriptGoogleAnalytics } from './script-google-analytics';

import type { FC } from 'react';

const Scripts: FC = () => {
    const renderDevelopmentScripts =
        _APP_IS_MODE_DEVELOPMENT() || _APP_IS_HOST_LOCAL();

    return renderDevelopmentScripts ? null : (
        <>
            <ScriptGoogleAnalytics />
        </>
    );
};

export default Scripts;
