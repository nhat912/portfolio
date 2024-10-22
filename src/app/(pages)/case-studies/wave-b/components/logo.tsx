import ChildSectionLayout from "@/src/components/childSectionLayout";
import QualityImage from "@/src/components/qualityImage";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";

export default async function LogoSection() {
    const isMobile = await isMobileDevice()

    return (
        <ChildSectionLayout value="Logo" className="container">
            <div className="space-y-4 lg:space-y-5">
                <p className="space-x-1">
                    We aim to select a logo with vibrant, youthful colors while maintaining a sense of progress and innovation. The name &quot;WaveB&quot; combines the words &quot;Wave&quot; and &quot;Blockchain&quot;, symbolizing a new wave of blockchain technology.
                </p>
                <p className="space-x-1">
                    Below are some logo sketches that we created, drawing inspiration from various sources. After refining the designs, we selected the current logo, which features youthful and modern colors, along with lines that ensure both aesthetic appeal and symbolic relevance to the blockchain field.
                </p>
                <div className="relative w-full h-[200px] lg:h-[311px]">
                    {isMobile ? (
                        <QualityImage
                            fill
                            quality={100}
                            src="/case-studies/waveb/logo.png"
                            alt="Logo sketches"
                        />
                    ) : (
                        <QualityImage
                            fill
                            quality={100}
                            src="/case-studies/waveb/desk-logo.png"
                            alt="Logo sketches"
                        />
                    )}
                </div>
            </div>

        </ChildSectionLayout>
    )
}
