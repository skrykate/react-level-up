import { GoogleAnalytics } from '@next/third-parties/google';

import { _APP_FLAG_USE_GOOGLE_ANALYTICS } from '@/constants/flags';

import { _APP_GOOGLE_ANALYTICS_ID } from '@/constants/main';

import type { FC } from 'react';

const ScriptGoogleAnalytics: FC = () => {
    if (!_APP_FLAG_USE_GOOGLE_ANALYTICS) return null;

    return <GoogleAnalytics gaId={_APP_GOOGLE_ANALYTICS_ID} />;
};

export default ScriptGoogleAnalytics;
