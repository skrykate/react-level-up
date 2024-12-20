import { Text } from '@/components/ui-typography-examples/text';

import type { FC } from 'react';

interface PersonBioProps {
    nickname: string;
    firstName?: string;
    lastName?: string;
}

const PersonBio: FC<PersonBioProps> = ({ firstName, lastName, nickname }) => {
    const fullName = `${firstName} ${lastName}`;

    return (
        <Text>
            Nickname: {nickname}
            <br />
            Full Name: {fullName}
        </Text>
    );
};

export default PersonBio;
