'use client';

import { App } from '@/components/ui-examples/app';

import { Tracker } from './tracker';

import type { FC } from 'react';

const CaseOnlineStatusBar: FC = () => {
    return (
        <App
            title="OnlineStatusBar"
            width={520}
        >
            <Tracker />
        </App>
    );
};

CaseOnlineStatusBar.displayName = 'Example.CaseOnlineStatusBar';

export default CaseOnlineStatusBar;
