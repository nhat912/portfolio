import { siteConfig } from "@/src/config";

export const WASHUP_FEATURES = [
    {
        href: siteConfig.pageList.vehicleWashApp.href,
        title: 'Vehicle wash app'
    },
    {
        href: siteConfig.pageList.insuranceFeature.href,
        title: 'Insurance Feature'
    },
    {
        href: siteConfig.pageList.technicianApp.href,
        title: 'Technician app'
    },
    {
        href: siteConfig.pageList.technicianOrder.href,
        title: 'Technician Order'
    }
]

export interface Item {
    id: string;
    title: string;
}


