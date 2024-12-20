import { createContext, useContext } from 'react';

export const DataContext = createContext<string | null>(null);

export const useDataContext = (): string => {
    const context = useContext(DataContext);

    if (!context) {
        throw new Error(
            '`useDataContext` must be used within a `DataProvider`'
        );
    }

    return context;
};
