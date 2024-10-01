import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import Image from "next/image";
import { Fragment } from "react";

export default async function NotFound() {
    const isMobile = await isMobileDevice()

    return (
        <main className="h-[calc(100vh-52px)] lg:h-[calc(100vh-80px)] bg-background flex flex-col justify-center items-center container">
            <div className="relative w-full h-[278px] lg:w-[515px] lg:h-[400px]">
                <Image
                    fill
                    priority
                    quality={90}
                    src='/404.png'
                    alt='404'
                />
            </div>
            <h1 className="my-2 lg:my-4 lg:text-[40px] lg:leading-normal text-xl font-bold">
                I&apos;m still working on it
            </h1>
            <div className="text-[#FAFAFA] text-center">
                {isMobile ? (
                    <Fragment>
                        <p>
                            I know you want to look around
                        </p>
                        <p>
                            just give me a few more days to finish
                        </p>
                    </Fragment>
                ) : (
                    <Fragment>
                        <p>
                            I know you want to look around, just give me a few more days to finish.
                        </p>
                    </Fragment>
                )}
            </div>

            <button className="w-[134px] lg:w-[161px] h-10 lg:h-[60px] bg-gradient-to-tr from-secondary to-primary rounded-lg text-background font-semibold mt-8 shadow-lg transition-transform duration-300 hover:scale-105">
                Back to Home
            </button>
        </main>
    )
}
