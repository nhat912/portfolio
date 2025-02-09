import DesktopVehicleWashApp from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/desktop";
import MobileVehicleWashApp from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/mobile";
import ProjectBreadcrumbs from "@/src/components/projectBreadcumbs";
import { siteConfig } from "@/src/config";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: 'Vehicle Wash App',
};

export default async function Page() {
    const isMobile = await isMobileDevice()

    return (
        <>
            <ProjectBreadcrumbs items={[
                {
                    label: siteConfig.pageList.vehicleWashApp.as,
                },
            ]} />
            {isMobile ? <MobileVehicleWashApp /> : <DesktopVehicleWashApp />}
        </>
    )
}
