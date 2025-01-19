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
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import Image from 'next/image';

const errorMessage = 'Invalid code';
const OTP_LENGTH = 4;
enum Step {
	FORM = 'FORM',
	SUCCESS = 'SUCCESS'
}

const FormSchema = z.object({
	key: z
		.string()
		.min(OTP_LENGTH, { message: errorMessage })
		.max(OTP_LENGTH, { message: errorMessage })
});

function PasswordDialog() {
	const router = useRouter();
	const pathName = usePathname();
	const { cbUrl } = useAppContext()
	const [step, setStep] = useState<Step>(Step.FORM)

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
			await fetch(siteConfig.pageList.setKey.href, {
				method: 'POST',
				body: JSON.stringify({ key: data.key })
			});
			setStep(Step.SUCCESS);

			setTimeout(() => {
				onChangeOpenPasswordDialog(false);
				router.push(cbUrl || pathName);
			}, 1500);
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
				className={cn("w-[410px] p-0 text-sm lg:text-lg bg-24 border-none !rounded-[24px] overflow-hidden", step === Step.SUCCESS ? "h-[190px]" : "h-[345px]")}
				onInteractOutside={() => router.replace(pathName)}
			>
				{step === Step.FORM ? (
					<Form {...form}>
						<form className="flex flex-col justify-center items-center gap-10">
							<div className="flex flex-col justify-center items-center gap-4">
								<div className="size-8 relative">
									<Image
										fill
										src="/lock.svg"
										alt="Lock" />
								</div>
								<div className="text-d9 font-semibold text-center">
									Project highlights is locked
								</div>
							</div>

							<div className="">
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
																className={cn("size-[52px] border-2 bg-4b !rounded-lg lg:text-base", codeErr && 'border-[#F44235]')}
															/>
														))}
													</InputOTPGroup>
												</InputOTP>
											</FormControl>
										</FormItem>
									)}
								/>
							</div>

							<div className="text-center text-92 font-normal">
								<div className="space-x-1">
									<span>Feel free to message me on</span>
									<a
										className="text-gradient font-semibold"
										href={siteConfig.contact.linkedin.href}
									>
										{siteConfig.contact.linkedin.as}
									</a>
								</div>
								<div className="space-x-1">
									<span>or send an</span>
									<a
										className="text-gradient font-semibold"
										href={siteConfig.contact.email.href}
									>
										Email
									</a>
									<span>to get a code!</span>
								</div>
							</div>
						</form>
					</Form>
				) : (
					<div className="flex flex-col justify-center items-center gap-6">
						<div className="size-8 relative">
							<Image
								fill
								src="/lock-open.svg"
								alt="Lock Open" />
						</div>
						<div className="text-accent text-center">
							Great! Now you can access
							all these projects
						</div>
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}

export default PasswordDialog;
