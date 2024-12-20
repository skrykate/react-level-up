'use client';

import { App } from '@/components/ui-examples/app';

import { CharacterSelector } from './character-selector';

import type { FC } from 'react';

const CaseAutoCompleteInitial: FC = () => {
    return (
        <App
            title="AutoComplete"
            width={480}
        >
            <CharacterSelector />
        </App>
    );
};

CaseAutoCompleteInitial.displayName = 'Example.CaseAutoCompleteInitial';

export default CaseAutoCompleteInitial;
