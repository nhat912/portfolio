import WashUpPageSelector from "@/src/app/(pages)/wash-up/components/washup-page-selector";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import Image from "next/image";
import { PropsWithChildren } from "react";



export default async function Layout({ children }: PropsWithChildren) {
    const isMobile = await isMobileDevice()

    if (isMobile) {
        return (
            <>
                {children}
            </>
        )
    }

    return (
        <main className="">
            <div className="w-[1240px] mx-auto py-[100px] space-y-6 text-d9">
                <div className="flex gap-6 justify-between">
                    <div className="w-[250px] grow-0 shrink-0 space-y-6">
                        <Image
                            priority
                            src="/vehicle-wash-app/washup-logo.png"
                            alt="washup-logo"
                            width={250}
                            height={100}
                        />
                    </div>
                    <WashUpPageSelector />
                </div>
                <div className="flex gap-6 justify-between">
                    {children}
                </div>
            </div>
        </main>
    )
}