'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
	PropsWithChildren,
	createContext,
	use,
	useEffect,
	useState
} from 'react';

export interface IAppContext {
	keyValue: string | undefined;
	openPasswordDialog: boolean;
	onChangeOpenPasswordDialog: (_f: boolean) => void;
	isPasswordCorrect: boolean;
	onChangePasswordCorrect: (_f: boolean) => void;
}

export interface IAppParams extends PropsWithChildren {
	keyValue: string | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppContext = createContext<any>(null);

export const AppProvider = ({ children, keyValue }: IAppParams) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callbackUrl');
	const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

	const onChangeOpenPasswordDialog = (open: boolean) => {
		setOpenPasswordDialog(open);
	};

	const onChangePasswordCorrect = (isCorrect: boolean) => {
		setIsPasswordCorrect(isCorrect);
	};

	useEffect(() => {
		if (callbackUrl) {
			if (keyValue) {
				router.replace(callbackUrl);
				return;
			}
			onChangeOpenPasswordDialog(true);
		}
	}, [callbackUrl, keyValue, router]);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<AppContext.Provider
			value={{
				key: keyValue,
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
