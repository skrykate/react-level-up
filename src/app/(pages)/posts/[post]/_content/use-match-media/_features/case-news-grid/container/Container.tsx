import './styles.css';

import { Layer } from '@/components/ui-examples/layer';
import { Square } from '@/components/ui-examples/square';

import { Message } from '@/components/ui-typography-examples/message';

import { loadData } from '@/fake-api/items';

import { useMatchMedia } from '@/hooks/use-match-media';

import { cn } from '@/helpers/cn';

import type { FC } from 'react';

const items = loadData(6);

const Container: FC = () => {
    const { isTablet, isDesktop } = useMatchMedia();

    const containerClass = isDesktop ? 'desktop' : isTablet ? 'tablet' : '';

    return (
        <Layer title="Container">
            <Message>
                Dynamic styling adapted to your device. Block positions adjust
                seamlessly based on screen size.
            </Message>
            <div className="relative border-y-4 border-neutral-900 dark:border-neutral-100">
                <div className={cn('container', containerClass)}>
                    {items.map((item) => (
                        <Square key={item.id}>
                            <span className="p-4 text-center font-monoBrand text-2xl">
                                {item.name}
                            </span>
                        </Square>
                    ))}
                </div>
            </div>
        </Layer>
    );
};

export default Container;
