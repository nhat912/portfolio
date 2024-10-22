import ChildSectionLayout from '@/src/components/childSectionLayout'
import QualityImage from '@/src/components/qualityImage'
import { isMobileDevice } from '@/src/helpers/isMobileDevice'

export default async function UserFlowSection() {
    const isMobile = await isMobileDevice()

    return (
        <ChildSectionLayout value="Userflow" className="container">
            <div className="space-y-5 lg:space-y-8">
                <p>
                    This is a basic user flow that most users will follow, including steps such as searching for NFT products, reviewing information, and participating in auctions to acquire them.
                </p>
                <div className="w-full h-[745px] lg:h-[345px] relative">
                    {isMobile ? (
                        <QualityImage
                            fill
                            quality={100}
                            src="/case-studies/waveb/user-flow.png"
                            alt="Userflow"
                        />
                    ) : (
                        <QualityImage
                            fill
                            quality={100}
                            src="/case-studies/waveb/pc-user-flow.png"
                            alt="Userflow"
                        />
                    )}
                </div>
            </div>
        </ChildSectionLayout>
    )
}
