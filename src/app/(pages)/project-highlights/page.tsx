import DesktopProjectHighLightsPage from "@/src/app/(pages)/project-highlights/desktop/desktop-project-highlights";
import MobileProjectHighLightsPage from "@/src/app/(pages)/project-highlights/mobile/mobile-project-highlights";
import { siteConfig } from "@/src/config";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: 'Project Highlights',
};

async function Page() {
    const isMobile = await isMobileDevice()

    if (isMobile) {
        return <MobileProjectHighLightsPage />
    }

    return (
        <DesktopProjectHighLightsPage />
    );
}

export default Page;