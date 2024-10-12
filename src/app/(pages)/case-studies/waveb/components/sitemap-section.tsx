import ChildSectionLayout from "@/src/components/childSectionLayout";
import Image from "next/image";

export default function SitemapSection() {
    return (
        <ChildSectionLayout value="Font style" className="container">
            <div className="space-y-5">
                <p>
                    The tree diagram below organizes all the pages we have created for better clarity and understanding.
                </p>
                <div className="w-full h-[157px] relative">
                    <Image
                        fill
                        quality={100}
                        src="/case-studies/waveb/site-map.png"
                        alt="Sitemap"
                    />
                </div>
            </div>
        </ChildSectionLayout>
    )
}
