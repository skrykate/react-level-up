'use client';

import { Layer } from '@/components/ui-examples/layer';

import { Link } from '@/components/ui-typography-examples/link';
import { Text } from '@/components/ui-typography-examples/text';

import { useEventListener } from '@/hooks/use-event-listener';

import type { FC } from 'react';

const visibilityChangeHandler = () => {
    if (document.visibilityState === 'hidden') {
        console.log(
            `You left the tab at ${new Date().toLocaleTimeString()} so analytic data was sent to the server.`
        );
    } else {
        console.log(
            `You returned to the tab at ${new Date().toLocaleTimeString()}.`
        );
    }
};

const url =
    'https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event';

const Tracker: FC = () => {
    useEventListener('visibilitychange', visibilityChangeHandler, document);

    return (
        <Layer title="Tracker">
            <Text>
                Go to another tab by <br />
                <Link
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                >
                    visiting MDN
                </Link>
                , then come back and take a look at the console.
            </Text>
        </Layer>
    );
};

export default Tracker;
