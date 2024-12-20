'use client';

import { useEffect, useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { List } from '@/components/ui-examples/list';

import { Text } from '@/components/ui-typography-examples/text';

import { usePrevious } from '@/hooks/use-previous';

import { loadData } from '@/fake-api/users';

import type { FC } from 'react';

const idsList = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    name: `User Id: ${index + 1}`,
}));

const fetchUserName = async (personId: number) => {
    const data = await loadData();

    const user = data.find((user) => user.id === personId);

    return user!.name;
};

const Container: FC = () => {
    const [personId, setPersonId] = useState(1);

    const [value, setValue] = useState<string | null>(null);

    const [isLoading, setLoading] = useState(true);

    const prevValue = usePrevious(value);

    const handleChange = (item: (typeof idsList)[0]) => {
        setPersonId(item.id);
    };

    useEffect(() => {
        let isCancelled = false;

        setLoading(true);

        const fetchName = async () => {
            try {
                const newName = await fetchUserName(personId);

                if (!isCancelled) {
                    setValue(newName);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching name:', error);
                setLoading(false);
            }
        };

        fetchName();

        return () => {
            isCancelled = true;
        };
    }, [personId]);

    const currentName = value ?? 'null';

    const prevName = prevValue ?? 'null';

    return (
        <Layer title="Container">
            <label>Select a person ID:</label>
            <List
                items={idsList}
                selected={personId}
                onClick={handleChange}
            />
            <Text>
                <span className={isLoading ? 'opacity-30' : ''}>
                    Current name: {currentName}
                    <br />
                    Previous name: {prevName}
                </span>
            </Text>
        </Layer>
    );
};

export default Container;
