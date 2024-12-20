'use client';

import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';

import type { FC, ReactNode } from 'react';

interface ResetControlProps {
    children: ReactNode;
}

const ResetControl: FC<ResetControlProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const timeoutRef = useRef<number | null>(null);

    const handleClick = () => {
        setIsLoading(true);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <>
            <Button
                aria-label="Reset output"
                onClick={handleClick}
                className="absolute -top-4 right-4 z-20"
            >
                Reset
            </Button>
            {isLoading ? <Loader /> : children}
        </>
    );
};

export default ResetControl;
