import { useState, useLayoutEffect } from 'react';

const devices = {
    isMobile: '(max-width: 766px)',
    isTablet: '(min-width: 767px) and (max-width: 1199px)',
    isDesktop: '(min-width: 1200px)',
};

const mediaQueryLists = Object.values(devices).map((query) => {
    return window.matchMedia(query);
});

const getValues = (): boolean[] => {
    return mediaQueryLists.map((list: MediaQueryList) => list.matches);
};

type MatchMediaResult = Record<string, boolean>;

const useMatchMedia = (): MatchMediaResult => {
    const [values, setValues] = useState<boolean[]>(getValues);

    useLayoutEffect(() => {
        const handleChange = () => {
            setValues(getValues());
        };

        mediaQueryLists.forEach((list) =>
            list.addEventListener('change', handleChange)
        );

        return () =>
            mediaQueryLists.forEach((list) =>
                list.removeEventListener('change', handleChange)
            );
    }, []);

    const deviceIndicators: MatchMediaResult = Object.keys(devices).reduce(
        (acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
        }),
        {}
    );

    return deviceIndicators;
};

export default useMatchMedia;
