'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot
} from '@/components/ui/input-otp';
import { siteConfig } from '@/src/config';
import { useAppContext } from '@/src/providers/app-provider';
import { usePathname, useRouter } from 'next/navigation';

const errorMessage = 'Invalid code';
const OTP_LENGTH = 4;

const FormSchema = z.object({
	key: z
		.string()
		.min(OTP_LENGTH, { message: errorMessage })
		.max(OTP_LENGTH, { message: errorMessage })
});

function PasswordDialog() {
	const router = useRouter();
	const pathName = usePathname();

	const {
		openPasswordDialog,
		onChangeOpenPasswordDialog,
		isPasswordCorrect
	} = useAppContext();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			key: ''
		}
	});
	const codeErr = form?.formState?.errors?.key;

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		if (data.key === process.env.NEXT_PUBLIC_PRIVATE_CODE) {
			onChangeOpenPasswordDialog(false);
			await fetch(siteConfig.pageList.setKey.href, {
				method: 'POST',
				body: JSON.stringify({ key: data.key })
			});

			router.refresh();
		} else {
			form.setError('key', {
				type: 'manual',
				message: errorMessage
			});
		}
	};

	const handleOtpChange = async (value: string) => {
		form.setValue('key', value);
		if (value.length === OTP_LENGTH) {
			// Manually trigger validation for the code field
			const isValid = await form.trigger('key');

			// Check if the field is valid and the value length is 4 before submitting
			if (isValid) {
				form.handleSubmit(onSubmit)();
			}
		}
	};

	return (
		<Dialog
			open={isPasswordCorrect ? false : openPasswordDialog}
			onOpenChange={onChangeOpenPasswordDialog}
		>
			<DialogContent
				className="w-[300px] lg:w-[400px] h-[185px] lg:h-[200px] p-0 flex flex-col text-sm lg:text-lg justify-center items-center bg-24 border-none rounded-lg"
				onInteractOutside={() => router.replace(pathName)}
			>
				<Form {...form}>
					<form className="">
						<div className="text-center">
							<div className="space-x-1">
								<span>Feel free to message me on</span>
								<a
									className="bg-gradient font-semibold"
									href={siteConfig.contact.linkedin.href}
								>
									{siteConfig.contact.linkedin.as}
								</a>
							</div>
							<div className="space-x-1">
								<span>or send an</span>
								<span className="font-semibold">Email</span>
								<span>to get a code!</span>
							</div>
						</div>

						<div className="mt-4">
							<FormField
								control={form.control}
								name="key"
								render={({ field }) => (
									<FormItem className="grid place-items-center">
										<FormControl>
											<InputOTP
												maxLength={OTP_LENGTH}
												{...field}
												onChange={handleOtpChange}
											>
												<InputOTPGroup className="gap-x-3">
													{Array.from({
														length: OTP_LENGTH
													}).map((_, index) => (
														<InputOTPSlot
															key={index}
															index={index}
															className="size-[52px] border-none bg-4b !rounded-lg lg:text-base"
														/>
													))}
												</InputOTPGroup>
											</InputOTP>
										</FormControl>
										{codeErr && (
											<div className="font-semibold text-red-500 text-sm lg:text-base">
												{codeErr.message}
											</div>
										)}
									</FormItem>
								)}
							/>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}

export default PasswordDialog;
