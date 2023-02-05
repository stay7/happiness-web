import {useState} from "react";

export const STORAGE_KEY_PREFIX = "happiness_"

function useLocalStorage(key: string, initialState: string) {
    const storageKey = STORAGE_KEY_PREFIX + key
    const [storedValue, setStoredValue] = useState<string>(
        () => {
            const item = window.localStorage.getItem(storageKey)
            return item ? item : initialState
        }
    );

    const setValue = (value: any) => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore)
        window.localStorage.setItem(storageKey, valueToStore);
        console.log(`save ${storageKey}:${valueToStore}`)
    }

    return [storedValue, setValue];
}

export default useLocalStorage;