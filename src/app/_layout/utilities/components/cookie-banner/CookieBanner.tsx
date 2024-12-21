'use client';

import { Cookie } from 'lucide-react';

import { _APP_STORAGE_COOKIES_AGREEMENT } from '@/constants/main';

import { useLocalStorage } from '@/hooks/use-local-storage';

import { Button } from '@/components/ui/button';
import { Alert, AlertContent, AlertTitle } from '@/components/ui/alert';

import type { FC } from 'react';

const CookieBanner: FC = () => {
    const [isCookieBannerHidden, setIsCookieBannerVisible] = useLocalStorage(
        _APP_STORAGE_COOKIES_AGREEMENT,
        false
    );

    const handleClick = () => {
        setIsCookieBannerVisible(true);
    };

    if (isCookieBannerHidden) return null;

    return (
        <Alert className="fixed bottom-0 z-50 m-1 max-w-fit md:bottom-4">
            <Cookie className="h-6 w-6" />
            <AlertContent>
                <AlertTitle>Hands up!</AlertTitle>
                We use cookies to improve your experience on our site.
            </AlertContent>
            <Button onClick={handleClick}>Got it</Button>
        </Alert>
    );
};

export default CookieBanner;
