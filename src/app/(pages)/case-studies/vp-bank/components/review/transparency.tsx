import ReviewTitle from "@/src/app/(pages)/case-studies/vp-bank/components/review/review-title";
import QualityImage from "@/src/components/qualityImage";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";

export default async function TransparencySection() {
    const isMobile = await isMobileDevice()

    return (
        <div className="py-6 lg:py-[60px] border-t-2 border-dashed border-4b">
            <div className="space-y-2 lg:space-y-4">
                <ReviewTitle
                    value="Transparency"
                />
                <p>
                    Loan application forms should present information clearly and transparently to help users easily review. The information needs to be intuitive and straightforward, avoiding long, confusing text that can cause users to overlook important points.
                </p>
            </div>
            <div className="mt-5 relative w-full h-[500px]">
                {isMobile ? (
                    <QualityImage
                        fill
                        quality={100}
                        src="/case-studies/vp-bank/m-t.png"
                        alt="Transparency"
                    />
                ) : (
                    <QualityImage
                        fill
                        quality={100}
                        src="/case-studies/vp-bank/t.png"
                        alt="Transparency"
                    />
                )}
            </div>
        </div>
    )
}
