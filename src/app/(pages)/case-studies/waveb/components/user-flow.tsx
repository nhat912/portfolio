import ChildSectionLayout from '@/src/components/childSectionLayout'
import Image from 'next/image'

export default function UserFlowSection() {
    return (
        <ChildSectionLayout value="Userflow" className="container">
            <div className="space-y-5">
                <p>
                    This is a basic user flow that most users will follow, including steps such as searching for NFT products, reviewing information, and participating in auctions to acquire them.
                </p>
                <div className="w-full h-[745px] relative">
                    <Image
                        fill
                        quality={100}
                        src="/case-studies/waveb/user-flow.png"
                        alt="Userflow"
                    />
                </div>
            </div>
        </ChildSectionLayout>
    )
}
