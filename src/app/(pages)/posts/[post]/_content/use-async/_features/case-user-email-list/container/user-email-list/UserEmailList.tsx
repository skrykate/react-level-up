import { Loader } from '@/components/ui-examples/loader';
import { List } from '@/components/ui-examples/list';

import {
    Message,
    MessageType,
} from '@/components/ui-typography-examples/message';

import { useAsync, Status } from '@/hooks/use-async';

import { loadData } from '@/fake-api/users';

import type { FC } from 'react';

const fetchUserEmails = async () => {
    const users = await loadData();

    return users.map(({ id, email }) => ({
        id,
        name: email,
    }));
};

const UserEmailList: FC = () => {
    const { status, value, error } = useAsync(fetchUserEmails);

    if (status === Status.PENDING) {
        return <Loader />;
    }

    if (status === Status.ERROR && error !== null) {
        return <Message type={MessageType.Error}>{error.message}</Message>;
    }

    if (status === Status.SUCCESS && value !== null) {
        return <List items={value} />;
    }

    return null;
};

export default UserEmailList;
