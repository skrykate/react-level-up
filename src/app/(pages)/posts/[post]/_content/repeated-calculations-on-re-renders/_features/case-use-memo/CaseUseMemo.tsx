'use client';

import { App } from '@/components/ui-examples/app';

import { ParentComponent } from './parent-component';

import type { FC } from 'react';

interface CaseAutoCompleteProps {
    useMemoVersion: boolean;
}

const CaseUseMemo: FC<CaseAutoCompleteProps> = ({ useMemoVersion }) => {
    return (
        <App
            title={useMemoVersion ? 'useMemo' : 'No useMemo'}
            width={520}
        >
            <ParentComponent useMemoVersion={useMemoVersion} />
        </App>
    );
};

CaseUseMemo.displayName = 'Example.CaseUseMemo';

export default CaseUseMemo;
