import WashUpBreadcrumbs from "@/src/app/(wash-up)/wash-up/components/washup-breadcrumbs";
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
                    label: 'Project Highlights',
                    href: '/wash-up',
                },
                {
                    label: siteConfig.pageList.vehicleWashApp.as,
                },
            ]} />
            <VehicleWashAppPage />
        </>
    )
}
