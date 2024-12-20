import { useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Loader } from '@/components/ui-examples/loader';
import { List } from '@/components/ui-examples/list';

import {
    Message,
    MessageType,
} from '@/components/ui-typography-examples/message';

import { PersonBio } from './person-bio';

import { useFetch, State } from '@/hooks/use-fetch';

import type { FC } from 'react';

import type { FullUserData } from './person-bio/types';

const idsList = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    name: `User Id: ${index + 1}`,
}));

idsList.push({
    id: 25,
    name: `Non-existent user`,
});

const Container: FC = () => {
    const [personId, setPersonId] = useState(1);

    const { status, data, errorMessage }: State = useFetch(
        `https://jsonplaceholder.typicode.com/users/${personId}`
    );

    const handleChange = (item: (typeof idsList)[0]) => {
        setPersonId(item.id);
    };

    return (
        <Layer title="Container">
            <List
                items={idsList}
                selected={personId}
                onClick={handleChange}
            />
            <div className="flex w-full justify-center">
                {status === 'fetching' && <Loader />}
                {status === 'error' && (
                    <Message type={MessageType.Error}>{errorMessage}</Message>
                )}
                {status === 'fetched' && (
                    <PersonBio {...(data as FullUserData)} />
                )}
            </div>
        </Layer>
    );
};

export default Container;
