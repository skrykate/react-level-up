import { _APP_AUTHORS } from '@/constants/authors';
import { _APP_NAME, _APP_METADATA } from '@/constants/main';
import { _APP_ROUTE_HOME } from '@/constants/routes';

import type { Metadata } from 'next';

const { title, description } = _APP_METADATA;

const authors = _APP_AUTHORS.map((author) => ({
    name: author.name,
    url: author.links.linkedin,
}));

const creator = _APP_AUTHORS
    .map((author) => author.name)
    .join(', ')
    .concat(`, ${_APP_NAME}`);

const openGraphImage = {
    url: '/media/covers/og.png',
    alt: title,
};

export const metadata: Metadata = {
    title,
    description,
    authors,
    alternates: {
        canonical: _APP_ROUTE_HOME,
    },
    robots: 'index follow',
    creator,
    openGraph: {
        url: _APP_ROUTE_HOME,
        type: 'website',
        title,
        description,
        siteName: title,
        images: openGraphImage,
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: openGraphImage,
    },
};
