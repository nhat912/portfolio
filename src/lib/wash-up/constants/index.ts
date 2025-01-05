import { siteConfig } from "@/src/config";

export const WASHUP_FEATURES = [
    {
        href: siteConfig.pageList.washUp.vehicleWashApp.href,
        title: 'Vehicle wash app'
    },
    {
        href: siteConfig.pageList.washUp.insuranceFeature.href,
        title: 'Insurance Feature'
    },
    {
        href: siteConfig.pageList.washUp.technicianApp.href,
        title: 'Technician app'
    },
    {
        href: siteConfig.pageList.washUp.technicianOrder.href,
        title: 'Technician Order'
    }
]

export interface Item {
    id: string;
    title: string;
}


