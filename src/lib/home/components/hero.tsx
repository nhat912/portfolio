import QualityImage from "@/src/components/qualityImage";
import SectionLayout from "@/src/components/sectionLayout";

export default function HeroSection() {
    return (
        <SectionLayout className="flex flex-col gap-5 lg:flex-row-reverse lg:items-center lg:gap-1">
            <div className="w-[358px] lg:w-1/2 lg:h-auto lg:aspect-square h-[340px] grow-0 shrink-0 relative">
                <QualityImage
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
                <h1 className="font-bold leading-snug lg:leading-normal text-[32px] lg:text-[40px]">Nhat Nguyen,</h1>
                <h2 className="bg-gradient text-32 font-bold">Product Designer</h2>
                <h3 className="text-lg space-x-1">
                    <span>based in</span>
                    <span className="font-bold">Ho Chi Minh City, Vietnam</span>
                </h3>
                <p className="lg:pt-2">+2 years of experience creating intuitive and visually appealing interfaces that increase user satisfaction and engagement in the pharmaceutical e-commerce field. The platforms reached nearly 200,000 users by now.</p>
            </div>
        </SectionLayout>
    )
}
