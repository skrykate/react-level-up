'use client';

import { Layer } from '@/components/ui-examples/layer';

import { Article } from './article';
import { LazyImage } from './lazy-image';

import type { FC } from 'react';

const Scrollable: FC = () => {
    return (
        <Layer title="Scrollable">
            <div className="relative border-y-4 border-neutral-900 dark:border-neutral-100">
                <div className="flex h-80 flex-col space-y-2 overflow-y-auto p-4">
                    <Article />
                    <LazyImage />
                    <Article />
                </div>
            </div>
        </Layer>
    );
};

export default Scrollable;
