'use client';

import { App } from '@/components/ui-examples/app';

import { ParentComponent } from './parent-component';

import type { FC } from 'react';

interface CaseAutoCompleteProps {
    useCallbackVersion: boolean;
}

const CaseUseCallback: FC<CaseAutoCompleteProps> = ({ useCallbackVersion }) => {
    return (
        <App
            title={useCallbackVersion ? 'useCallback' : 'No useCallback'}
            width={520}
        >
            <ParentComponent useCallbackVersion={useCallbackVersion} />
        </App>
    );
};

CaseUseCallback.displayName = 'Example.CaseUseCallback';

export default CaseUseCallback;
