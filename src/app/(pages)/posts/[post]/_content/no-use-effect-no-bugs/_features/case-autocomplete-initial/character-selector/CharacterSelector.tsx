'use client';

import { useEffect, useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Label } from '@/components/ui-examples/label';
import { Input } from '@/components/ui-examples/input';
import { List } from '@/components/ui-examples/list';

import { loadData } from '@/fake-api/characters/load-data';

import type { FC, ChangeEvent } from 'react';

import type { ICharacters } from '@/fake-api/characters/types';

const CharacterSelector: FC = () => {
    const [value, setValue] = useState('');

    const [data, setData] = useState<ICharacters>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        if (value.length > 0) {
            loadData(value).then((result) => {
                setData(result);
            });
        } else {
            setData([]);
        }
    }, [value]);

    return (
        <Layer title="CharacterSelector">
            <div className="flex flex-col gap-2">
                <Label>Name</Label>
                <div className="relative h-14">
                    <Input
                        value={value}
                        onChange={handleChange}
                    />
                    <div className="absolute top-16 w-full">
                        <List items={data} />
                    </div>
                </div>
            </div>
        </Layer>
    );
};

export default CharacterSelector;
