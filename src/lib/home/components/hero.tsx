import SectionLayout from "@/src/components/sectionLayout";
import Image from "next/image";

export default function HeroSection() {
    return (
        <SectionLayout className="space-y-5">
            <div className="w-[358px] h-[340px] relative">
                <Image
                    fill
                    priority
                    quality={100}
                    src='/home/images/hero.png'
                    alt="Hero"
                    className="mx-auto object-contain"
                />
                <div className="bg-background opacity-70 blur-lg w-full h-16 absolute -bottom-4 right-0 left-0"></div>
            </div>

            <div className="space-y-3">
                <h1 className="font-bold h-full text-3xl/[32px]">Nhat Nguyen,</h1>
                <h2 className="bg-gradient text-3xl/[32px] font-bold">Product Designer</h2>
                <h3 className="text-lg space-x-1">
                    <span>based in</span>
                    <span className="font-bold">Ho Chi Minh City, Vietnam</span>
                </h3>
                <p>+2 years of experience creating intuitive and visually appealing interfaces that increase user satisfaction and engagement in the pharmaceutical e-commerce field. The platforms reached nearly 200,000 users by now.</p>
            </div>
        </SectionLayout>
    )
}
