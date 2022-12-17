import {useEffect, useState} from "react";

const STORAGE_KEY_PREFIX = "happiness_"

function useLocalStorage(key: string, initialState: string) {
    const storageKey = STORAGE_KEY_PREFIX + key
    const [state, setState] = useState<string>(
        () => JSON.parse(window.localStorage.getItem(storageKey) || initialState)
    );

    useEffect(() => {
        window.localStorage.setItem(storageKey, JSON.stringify(state));
    }, [storageKey, state])

    return [state, setState];
}

export default useLocalStorage;