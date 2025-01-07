'use client'

import QualityImage from "@/src/components/qualityImage";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter()

    return (
        <main className="h-[calc(100vh-52px)] lg:h-[calc(100vh-60px)] bg-background flex flex-col justify-center items-center container">
            <div className="relative w-full h-[278px] lg:w-[515px] lg:h-[400px]">
                <QualityImage
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
            <div className="text-[#FAFAFA] text-center flex flex-col lg:flex-row gap-1">
                <p>
                    I know you want to look around
                </p>
                <p>
                    just give me a few more days to finish
                </p>
            </div>

            <button
                type="button"
                className="w-[134px] lg:w-[161px] h-10 lg:h-[60px] bg-gradient-to-tr from-secondary to-primary rounded-lg text-background font-semibold mt-8 shadow-lg hover:from-[#F1ACBB] hover:to-[#F6E49D] transition-colors"
                onClick={() => router.push('/')}
            >
                Back to Home
            </button>
        </main>
    )
}
