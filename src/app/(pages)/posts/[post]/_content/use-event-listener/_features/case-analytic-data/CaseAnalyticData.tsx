'use client';

import { App } from '@/components/ui-examples/app';

import { Tracker } from './tracker';

import type { FC } from 'react';

const CaseAnalyticData: FC = () => {
    return (
        <App
            title="AnalyticData"
            width={520}
        >
            <Tracker />
        </App>
    );
};

CaseAnalyticData.displayName = 'Example.CaseAnalyticData';

export default CaseAnalyticData;
