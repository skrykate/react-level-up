import { Text } from '@/components/ui-typography-examples/text';

import { data } from '@/fake-api/users/data/users';

import type { FC } from 'react';

import type { FullUserData } from './types';

type PersonBioProps = FullUserData;

const PersonBio: FC<PersonBioProps> = ({ id }) => {
    const { name, email } = data[id - 1];

    return (
        <Text>
            Full Name: {name}
            <br />
            Email: {email}
        </Text>
    );
};

export default PersonBio;
