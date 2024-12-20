import { useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';

import { ChildComponent } from './child-component';

import type { FC } from 'react';

const initialData = 'null';

const dataToSet = 'John Doe';

const ParentComponent: FC = () => {
    console.log('ParentComponent --- Render');

    const [data, setData] = useState(initialData);

    const isDataSet = data !== initialData;

    const handleSetData = () => {
        setData(dataToSet);
    };

    return (
        <Layer
            title="Parent"
            colored
        >
            <ChildComponent data={data} />
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

export default ParentComponent;
