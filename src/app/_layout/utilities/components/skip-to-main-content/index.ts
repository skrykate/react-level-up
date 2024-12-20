import dynamic from 'next/dynamic';

const SkipToMainContent = dynamic(() => import('./SkipToMainContent'), {
    ssr: false,
});

export { SkipToMainContent };
