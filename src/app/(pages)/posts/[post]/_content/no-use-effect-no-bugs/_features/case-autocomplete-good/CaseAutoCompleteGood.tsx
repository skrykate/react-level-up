'use client';

import { App } from '@/components/ui-examples/app';

import { CharacterSelector } from './character-selector';

import type { FC } from 'react';

const CaseAutoCompleteGood: FC = () => {
    return (
        <App
            title="AutoComplete"
            width={480}
        >
            <CharacterSelector />
        </App>
    );
};

CaseAutoCompleteGood.displayName = 'Example.CaseAutoCompleteGood';

export default CaseAutoCompleteGood;
