'use client';

import { PropsWithChildren, createContext, use, useState } from 'react';

export interface IAppContext {
    openPasswordDialog: boolean;
    onChangeOpenPasswordDialog: (_f: boolean) => void;
    isPasswordCorrect: boolean;
    onChangePasswordCorrect: (_f: boolean) => void;
}

export interface IAppParams extends PropsWithChildren {
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: IAppParams) => {
    const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

    const onChangeOpenPasswordDialog = (open: boolean) => {
        setOpenPasswordDialog(open);
    }

    const onChangePasswordCorrect = (isCorrect: boolean) => {
        setIsPasswordCorrect(isCorrect);
    };

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <AppContext.Provider value={{
            openPasswordDialog,
            onChangeOpenPasswordDialog,
            isPasswordCorrect,
            onChangePasswordCorrect
        }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => use(AppContext) as IAppContext;
