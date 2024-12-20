'use client';

import { useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';

import { ParentComponent } from './parent-component';

import type { FC } from 'react';

const initialData = 'Hello!';

const dataToSet = 'Hello from the nearby `Container`!';

const Container: FC = () => {
    const [data, setData] = useState(initialData);

    const isDataSet = data !== initialData;

    const handleSetData = () => {
        setData(dataToSet);
    };

    return (
        <Layer
            title="Container"
            colored
        >
            <ParentComponent data={data} />
            <div className="flex w-full justify-center">
                <Button
                    disabled={isDataSet}
                    onClick={handleSetData}
                >
                    {isDataSet ? 'Data Set' : 'Set Data'}
                </Button>
            </div>
        </Layer>
    );
};

export default Container;
