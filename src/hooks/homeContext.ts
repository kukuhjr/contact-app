import { LazyQueryExecFunction, OperationVariables } from '@apollo/client';
import { createContext } from 'react';

interface HomeContextState {
    error: object | undefined,
    loading: boolean | undefined,
    data: object | undefined,
    getContacts: LazyQueryExecFunction<any, OperationVariables>,
    handleOpenAlert: (message: string, error: boolean) => void,
}

export const HomeContext = createContext<HomeContextState | undefined>(undefined);