'use client';

import { Button } from '@/components/ui-examples/button';

import { useDataStore } from '@/stores/data-store';

import type { FC } from 'react';

const dataToSet = 'Hello from Zustand!';

const DataButton: FC = () => {
    const setData = useDataStore((state) => state.setData);

    const isDataSet = useDataStore((state) => state.isDataSet);

    const handleResetStore = useDataStore((state) => state.resetStore);

    const handleSetData = () => {
        setData(dataToSet);
    };

    return (
        <div className="flex w-full justify-center space-x-4">
            <Button
                disabled={isDataSet}
                onClick={handleSetData}
            >
                {isDataSet ? 'Data Set' : 'Set Data'}
            </Button>
            <Button
                disabled={!isDataSet}
                onClick={handleResetStore}
            >
                Reset store
            </Button>
        </div>
    );
};

export default DataButton;
