import { useCallback, useEffect, useState } from 'react';

type InitialValue<T> = T | (() => T);

const useLocalStorage = <T>(
    key: string,
    initialValue: InitialValue<T>
): [T, (value: T) => void, () => void] => {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);

            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            console.error('Error retrieving value from `localStorage`:', error);

            return initialValue;
        }
    });

    const setLocalStorageValue = useCallback(
        (newValue: T) => {
            try {
                setValue(newValue);

                localStorage.setItem(key, JSON.stringify(newValue));

                window.dispatchEvent(
                    new StorageEvent('storage', {
                        key,
                        newValue: JSON.stringify(newValue),
                    })
                );
            } catch (error) {
                console.error('Error saving value to `localStorage`:', error);
            }
        },
        [key]
    );

    const removeLocalStorageValue = useCallback(() => {
        setValue(initialValue);

        localStorage.removeItem(key);
    }, [initialValue, key]);

    useEffect(() => {
        const updateAllTabs = (event: StorageEvent) => {
            if (event.key === key && event.newValue !== null) {
                setValue(JSON.parse(event.newValue));
            }
        };

        window.addEventListener('storage', updateAllTabs);

        return () => {
            window.removeEventListener('storage', updateAllTabs);
        };
    }, [key]);

    return [value, setLocalStorageValue, removeLocalStorageValue];
};

export default useLocalStorage;
