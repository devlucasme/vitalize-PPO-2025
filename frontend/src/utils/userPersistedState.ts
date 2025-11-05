import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export const usePersistedState = <T>(key: string, initialState: T): Response<T> => {
    const [state, setState] = useState<T>(() => {
        try {
            const storageValue = localStorage.getItem(key);
            if (storageValue) {
                return JSON.parse(storageValue) as T;
            }
            return initialState;
        } catch (error) {
            console.error(`Erro ao ler o valor de ${key} no localStorage:`, error);
            return initialState;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.error(`Erro ao salvar o valor de ${key} no localStorage:`, error);
        }
    }, [key, state]);

    return [state, setState];
};
