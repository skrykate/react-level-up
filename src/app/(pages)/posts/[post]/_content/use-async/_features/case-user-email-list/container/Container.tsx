'use client';

import { Layer } from '@/components/ui-examples/layer';

import { UserEmailList } from './user-email-list';

import type { FC } from 'react';

const Container: FC = () => {
    return (
        <Layer title="Container">
            <div className="flex w-full justify-center">
                <UserEmailList />
            </div>
        </Layer>
    );
};

export default Container;
