import { create } from 'zustand';

interface IDataStore {
    data: string;
    isDataSet: boolean;
    setData: (newData: string) => void;
    resetStore: () => void;
}

const zustandInitialData = 'Hello !';

const initialData = {
    data: zustandInitialData,
    isDataSet: false,
};

const useDataStore = create<IDataStore>((set) => ({
    ...initialData,
    setData: (newData) =>
        set({
            data: newData,
            isDataSet: true,
        }),
    resetStore: () =>
        set({
            ...initialData,
        }),
}));

export default useDataStore;
