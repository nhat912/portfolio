import MobileWashUpHeader from "@/src/app/(wash-up)/project-highlights/wash-up/components/mobile-washup-header";
import WashUpPageSelector from "@/src/app/(wash-up)/project-highlights/wash-up/components/washup-page-selector";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import Image from "next/image";
import { PropsWithChildren } from "react";



export default async function Layout({ children }: PropsWithChildren) {
    const isMobile = await isMobileDevice()

    if (isMobile) {
        return (
            <main className="container relative text-sm">
                <MobileWashUpHeader />
                <div className="mb-10 space-y-6 -mt-2.5">
                    {children}
                </div>
            </main>
        )
    }

    return (
        <main className="">
            <div className="w-[1240px] mx-auto py-[100px] text-d9 relative">
                <div className="flex gap-6 justify-between mt-[88px]">
                    <div className="w-[250px] grow-0 shrink-0 space-y-6">
                        <Image
                            priority
                            src="/washup-logo.svg"
                            alt="washup-logo"
                            width={250}
                            height={100}
                        />
                    </div>
                    <WashUpPageSelector />
                </div>
                <div className="flex gap-6 justify-between mt-6">
                    {children}
                </div>
            </div>
        </main>
    )
}