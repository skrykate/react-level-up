import dynamic from 'next/dynamic';

const CookieBanner = dynamic(() => import('./CookieBanner'), {
    ssr: false,
});

export { CookieBanner };
