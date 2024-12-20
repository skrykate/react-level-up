'use client';

import { useEffect, useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Label } from '@/components/ui-examples/label';
import { Input } from '@/components/ui-examples/input';
import { List } from '@/components/ui-examples/list';

import { loadData } from '@/fake-api/characters/load-data';

import type { FC, ChangeEvent } from 'react';

import type { ICharacter, ICharacters } from '@/fake-api/characters/types';

const CharacterSelector: FC = () => {
    const [value, setValue] = useState('');

    const [data, setData] = useState<ICharacters>([]);

    const [disableSuggestions, setDisableSuggestion] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);

        setDisableSuggestion(false);
    };

    useEffect(() => {
        if (disableSuggestions) {
            return;
        }

        if (value.length > 0 && !disableSuggestions) {
            loadData(value).then((result) => {
                setData(result);
            });
        } else {
            setData([]);
        }
    }, [value, disableSuggestions]);

    const handleSelectCharacter = (character: ICharacter) => {
        setValue(character.name);

        setDisableSuggestion(true);

        setData([]);
    };

    return (
        <Layer title="CharacterSelector">
            <div className="flex flex-col gap-2">
                <Label>Name</Label>
                <div className="relative h-14">
                    <Input
                        value={value}
                        onChange={handleChange}
                    />
                    <div className="absolute top-16 w-full bg-neutral-100 dark:bg-neutral-900">
                        <List
                            items={data}
                            onClick={handleSelectCharacter}
                        />
                    </div>
                </div>
            </div>
        </Layer>
    );
};

export default CharacterSelector;
