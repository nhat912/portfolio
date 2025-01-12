import WashUpBreadcrumbs from "@/src/app/(wash-up)/project-highlights/wash-up/components/washup-breadcrumbs";
import { siteConfig } from "@/src/config";
import VehicleWashAppPage from "@/src/lib/wash-up/vehicle-wash-app";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: 'Vehicle Wash App',
};

export default function Page() {
    return (
        <>
            <WashUpBreadcrumbs items={[
                {
                    label: siteConfig.pageList.projectHighlights.as,
                    href: siteConfig.pageList.projectHighlights.href,
                },
                {
                    label: siteConfig.pageList.vehicleWashApp.as,
                },
            ]} />
            <VehicleWashAppPage />
        </>
    )
}
