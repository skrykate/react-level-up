import { useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';

import { Text } from '@/components/ui-typography-examples/text';

import type { FC, ReactNode } from 'react';

interface ChildComponentProps {
    children: ReactNode;
}

const textContent = 'Some additional content 😸';

const ChildComponent: FC<ChildComponentProps> = ({ children }) => {
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
            {children}
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
