import NextTopLoader from 'nextjs-toploader';

import { _APP_COLORS } from '@/constants/design';

import type { FC } from 'react';

const settings = {
    color: _APP_COLORS.brand,
    initialPosition: 0.1,
    crawlSpeed: 200,
    height: 2,
    crawl: true,
    showSpinner: false,
    easing: 'ease',
    speed: 200,
    zIndex: 999,
    showAtBottom: false,
};

const Provider: FC = () => {
    return <NextTopLoader {...settings} />;
};

export default Provider;
