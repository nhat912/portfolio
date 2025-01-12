import DesktopAboutPage from "@/src/app/(pages)/about/desktop/desktop-about-page";
import MobileAboutPage from "@/src/app/(pages)/about/mobile/mobile-about-page";
import { siteConfig } from "@/src/config";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: 'About',
};


export default async function Page() {
    const isMobile = await isMobileDevice()

    if (isMobile) {
        return <MobileAboutPage />
    }

    return (
        <DesktopAboutPage />
    );
}
