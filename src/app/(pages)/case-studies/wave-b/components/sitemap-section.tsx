import ChildSectionLayout from "@/src/components/childSectionLayout";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import Image from "next/image";

export default async function SitemapSection() {
    const isMobile = await isMobileDevice()

    return (
        <ChildSectionLayout value="Sitemap" className="container">
            <div className="space-y-5">
                <p>
                    The tree diagram below organizes all the pages we have created for better clarity and understanding.
                </p>
                <div className="w-full h-[157px] lg:h-[455px] relative">
                    {isMobile ? (
                        <Image
                            fill
                            quality={100}
                            src="/case-studies/waveb/site-map.png"
                            alt="Sitemap"
                        />
                    ) : (
                        <Image
                            fill
                            quality={100}
                            src="/case-studies/waveb/pc-site-map.png"
                            alt="Sitemap"
                        />
                    )}
                </div>
            </div>
        </ChildSectionLayout>
    )
}
