'use client';

import { App } from '@/components/ui-examples/app';

import { CharacterSelector } from './character-selector';

import type { FC } from 'react';

const CaseAutoCompletePartial: FC = () => {
    return (
        <App
            title="AutoComplete"
            width={480}
        >
            <CharacterSelector />
        </App>
    );
};

CaseAutoCompletePartial.displayName = 'Example.CaseAutoCompletePartial';

export default CaseAutoCompletePartial;
