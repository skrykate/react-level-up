import { useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';

import { Text } from '@/components/ui-typography-examples/text';

import { GrandChildComponent } from './grand-child-component';

import type { FC } from 'react';

interface ChildComponentProps {
    data: string;
}

const textContent = 'Some additional content 😻';

const ChildComponent: FC<ChildComponentProps> = ({ data }) => {
    console.log('ChildComponent --- Render');

    const [isOpen, setIsopen] = useState(false);

    const handleToggle = () => {
        setIsopen((prev) => !prev);
    };

    return (
        <Layer
            title="Child"
            colored
        >
            <GrandChildComponent data={data} />
            <div className="flex w-full justify-center">
                <Button onClick={handleToggle}>
                    {isOpen ? 'Hide' : 'Show'}
                </Button>
            </div>
            {isOpen && <Text>{textContent}</Text>}
        </Layer>
    );
};

export default ChildComponent;
