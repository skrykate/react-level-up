'use client';

import { useState, useRef } from 'react';

import { Layer } from '@/components/ui-examples/layer';

import { Link } from '@/components/ui-typography-examples/link';
import { Message } from '@/components/ui-typography-examples/message';
import { Text } from '@/components/ui-typography-examples/text';

import { useEventListener } from '@/hooks/use-event-listener';

import type { FC } from 'react';

const id = 'example-div';

const initialValue = 0;

const Tracker: FC = () => {
    const url = `#${id}`;

    const linkRef = useRef<HTMLAnchorElement | null>(null);

    const [linkClicks, setLinkClicks] = useState(initialValue);

    const handleLinkClick = () => {
        setLinkClicks((prevCount) => prevCount + 1);
    };

    useEventListener('click', handleLinkClick, linkRef);

    return (
        <Layer title="Tracker">
            <Text>
                Click this link:{' '}
                <Link
                    ref={linkRef}
                    href={url}
                >
                    Click Me!
                </Link>
            </Text>
            <Message id={id}>You get here by clicking the link above.</Message>
            <Text>Number of clicks: {linkClicks}</Text>
        </Layer>
    );
};

export default Tracker;
