'use client';

import { App } from '@/components/ui-examples/app';

import { Tracker } from './tracker';

import type { FC } from 'react';

const CaseInteractiveLink: FC = () => {
    return (
        <App
            title="InteractiveLink"
            width={520}
        >
            <Tracker />
        </App>
    );
};

CaseInteractiveLink.displayName = 'Example.CaseInteractiveLink';

export default CaseInteractiveLink;
