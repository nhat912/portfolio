import { siteConfig } from "@/src/config";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="container space-y-4">
            <h2 className="font-bold text-2xl">Contact me via</h2>
            <p className="space-x-1">
                <span> Thanks for visiting my portfolio, please feel free to contact me for more information via</span>
                <a href={siteConfig.contact.linkedin.href} className="bg-gradient font-semibold">
                    {siteConfig.contact.linkedin.as}
                </a>
            </p>
            <p className="space-x-1">
                <span>or send an email to</span>
                <a href={siteConfig.contact.email.href} className="bg-gradient font-semibold">
                    {siteConfig.contact.email.as}
                </a>
            </p>
            <p className="flex items-center gap-x-1">
                <span>I hope to collaborate with you in the future.</span>
                <Image
                    src="/home/icons/rocket.svg"
                    alt="rocket"
                    width={20}
                    height={20}
                />
            </p>
        </footer>
    )
}
