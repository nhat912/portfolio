import QualityImage from "@/src/components/qualityImage";
import { siteConfig } from "@/src/config";

export default function Footer() {
    return (
        <div className="py-5 lg:py-[60px] bg-[#242427]">
            <footer className="container space-y-4 lg:space-y-3">
                <h2 className="font-bold text-2xl">Contact me via</h2>
                <p className="space-x-1 items-baseline">
                    <span> Thanks for visiting my portfolio, please feel free to contact me for more information via</span>
                    <a href={siteConfig.contact.linkedin.href} className="bg-gradient font-bold">
                        {siteConfig.contact.linkedin.as}
                    </a>
                </p>
                <p className="space-x-1 items-baseline">
                    <span>or send an email to</span>
                    <a href={siteConfig.contact.email.href} className="bg-gradient font-bold">
                        {siteConfig.contact.email.as}
                    </a>
                </p>
                <p className="flex items-center gap-x-1">
                    <span>I hope to collaborate with you in the future.</span>
                    <QualityImage
                        src="/home/icons/rocket.svg"
                        alt="rocket"
                        width={20}
                        height={20}
                    />
                </p>
            </footer>
        </div>
    )
}
