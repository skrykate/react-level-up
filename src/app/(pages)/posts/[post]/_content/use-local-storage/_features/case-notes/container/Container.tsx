'use client';

import { Layer } from '@/components/ui-examples/layer';
import { Button } from '@/components/ui-examples/button';
import { List } from '@/components/ui-examples/list';

import { Message } from '@/components/ui-typography-examples/message';
import { Text } from '@/components/ui-typography-examples/text';

import { loadData, IDataItems, IDataItem } from '@/fake-api/items';

import { useLocalStorage } from '@/hooks/use-local-storage';

import type { FC } from 'react';

const noteMessage = 'Note with Id';

const maxNotes = 6;

const initialItems = loadData(3);

const Container: FC = () => {
    const [notes, setNotes] = useLocalStorage<IDataItems>(
        'notes',
        initialItems
    );

    const handleAddNote = () => {
        if (notes.length === maxNotes) return;

        const newId = notes.length === 0 ? 1 : notes[notes.length - 1].id + 1;

        setNotes([
            ...notes,
            {
                id: newId,
                name: `${noteMessage} ${newId}`,
            },
        ]);
    };

    const handleDeleteNote = (item: IDataItem) => {
        setNotes(notes.filter((note) => note.id !== item.id));
    };

    return (
        <Layer title="Container">
            <Text>
                Notes remain: {maxNotes - notes.length} / {maxNotes}
            </Text>
            {notes.length !== 0 && (
                <List
                    items={notes}
                    onClick={handleDeleteNote}
                />
            )}
            <div className="flex w-full justify-center">
                <Button
                    onClick={handleAddNote}
                    disabled={maxNotes === notes.length}
                >
                    Add Note
                </Button>
            </div>
            <Message>Click on the note to remove it.</Message>
        </Layer>
    );
};

export default Container;
