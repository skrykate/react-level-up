'use client';

import { Layer } from '@/components/ui-examples/layer';
import { Loader } from '@/components/ui-examples/loader';
import { List } from '@/components/ui-examples/list';
import { Button } from '@/components/ui-examples/button';

import {
    Message,
    MessageType,
} from '@/components/ui-typography-examples/message';

import { useAsync, Status } from '@/hooks/use-async';

import { loadData } from '@/fake-api/users';

import type { FC } from 'react';

const fetchUserNames = async () => {
    const users = await loadData();

    return users.map(({ id, name }) => ({
        id,
        name,
    }));
};

const Container: FC = () => {
    const {
        execute: handleFetch,
        status,
        value,
        error,
    } = useAsync(fetchUserNames, false);

    return (
        <Layer title="Container">
            <div className="flex w-full flex-col items-center space-y-6">
                <Button
                    onClick={handleFetch}
                    disabled={
                        status === Status.PENDING || status === Status.SUCCESS
                    }
                >
                    {status === Status.PENDING
                        ? 'Loading...'
                        : status === Status.SUCCESS
                          ? 'Loaded'
                          : 'Load Users'}
                </Button>
                {status === Status.PENDING && <Loader />}
                {status === Status.ERROR && error !== null && (
                    <Message type={MessageType.Error}>{error.message}</Message>
                )}
                {status === Status.SUCCESS && value !== null && (
                    <List items={value} />
                )}
            </div>
        </Layer>
    );
};

export default Container;
