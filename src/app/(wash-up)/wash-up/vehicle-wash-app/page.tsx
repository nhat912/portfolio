import { siteConfig } from "@/src/config";
import VehicleWashAppPage from "@/src/lib/wash-up/vehicle-wash-app";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: 'Vehicle Wash App',
};

export default function Page() {
    return (
        <VehicleWashAppPage />
    )
}
