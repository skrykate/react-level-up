import { Layer } from '@/components/ui-examples/layer';

import { PersonBio } from './person-bio';

import type { FC } from 'react';

const data = 'jod76';

const Container: FC = () => {
    return (
        <Layer title="Container">
            <PersonBio nickname={data} />
        </Layer>
    );
};

export default Container;
