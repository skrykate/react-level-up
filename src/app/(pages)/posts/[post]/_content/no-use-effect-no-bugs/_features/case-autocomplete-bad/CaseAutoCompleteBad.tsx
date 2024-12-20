'use client';

import { App } from '@/components/ui-examples/app';

import { CharacterSelector } from './character-selector';

import type { FC } from 'react';

const CaseAutoCompleteBad: FC = () => {
    return (
        <App
            title="AutoComplete"
            width={480}
        >
            <CharacterSelector />
        </App>
    );
};

CaseAutoCompleteBad.displayName = 'Example.CaseAutoCompleteBad';

export default CaseAutoCompleteBad;
