import { _APP_AUTHOR_SKRYKATE } from '@/constants/authors';
import {
    _APP_LINK_GITHUB_DATA_POST,
    _APP_LINKS_GITHUB,
} from '@/constants/links';

import { A } from '@/components/ui-typography/a';
import { Small } from '@/components/ui-typography/small';

import type { FC } from 'react';

interface FooterProps {
    id: string;
    date: string;
}

function formatDate(dateString: string) {
    const [day, month, year] = dateString.split('.');

    return `20${year}-${month}-${day}`;
}

const Footer: FC<FooterProps> = ({ id, date }) => {
    const formattedDate = formatDate(date);

    return (
        <footer className="flex flex-col space-y-2 text-center">
            <span>
                Last updated on{' '}
                <time
                    dateTime={formattedDate}
                    className="font-monoBrand"
                >
                    {date}
                </time>{' '}
                by{' '}
                <A
                    className="font-monoBrand"
                    href={_APP_AUTHOR_SKRYKATE.links.linkedin}
                >
                    @{_APP_AUTHOR_SKRYKATE.nickname}
                </A>
            </span>
            <Small>
                Suggest an improvement on{' '}
                <A
                    className="font-monoBrand"
                    href={_APP_LINK_GITHUB_DATA_POST(id)}
                >
                    Github
                </A>{' '}
                repository.
            </Small>
        </footer>
    );
};

export default Footer;
