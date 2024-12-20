'use client';

import { useCallback, useState } from 'react';

import { Layer } from '@/components/ui-examples/layer';
import { Label } from '@/components/ui-examples/label';
import { Input } from '@/components/ui-examples/input';
import { Button } from '@/components/ui-examples/button';

import { Text } from '@/components/ui-typography-examples/text';

import { useEventListener } from '@/hooks/use-event-listener';

import type { FC } from 'react';

const Tracker: FC = () => {
    const [isOnline, setIsOffline] = useState(true);

    const handleOnline = useCallback(() => {
        setIsOffline(true);
    }, []);

    const handleOffline = useCallback(() => {
        setIsOffline(false);
    }, []);

    useEventListener('online', handleOnline);
    useEventListener('offline', handleOffline);

    return (
        <Layer title="Tracker">
            <Text>
                Internet status:{' '}
                <span className={isOnline ? 'text-green-500' : 'text-red-500'}>
                    {isOnline ? '✅ Connected' : '❌ Disconnected'}
                </span>
            </Text>

            <div className="flex flex-col gap-2">
                <Label>Important Message</Label>
                <Input disabled={!isOnline} />
                <div className="flex w-full justify-center">
                    <Button disabled={!isOnline}>Save progress</Button>
                </div>
            </div>
        </Layer>
    );
};

export default Tracker;
