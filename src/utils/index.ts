import { siteConfig } from "@/src/config";

export interface IItem {
    icon: string;
    alt: string;
}

export interface ISidebarItem {
    id: string;
    href: string;
    status: {
        normal: IItem;
        hover: IItem;
        active: IItem;
    }
}

export const SidebarItems: ISidebarItem[] = [
    {
        id: 'home',
        href: siteConfig.pageList.home.href,
        status: {
            normal: {
                icon: '/home/icons/hn.svg',
                alt: 'Home'
            },
            hover: {
                icon: '/home/icons/hh.svg',
                alt: 'Home'
            },
            active: {
                icon: '/home/icons/ha.svg',
                alt: 'Home'
            },
        }
    },
    {
        id: 'projectHighlights',
        href: siteConfig.pageList.projectHighlights.href,
        status: {
            normal: {
                icon: '/home/icons/bn.svg',
                alt: 'Home'
            },
            hover: {
                icon: '/home/icons/bh.svg',
                alt: 'Home'
            },
            active: {
                icon: '/home/icons/ba.svg',
                alt: 'Home'
            },
        }
    },
    {
        id: 'caseStudies',
        href: siteConfig.pageList.caseStudies.href,
        status: {
            normal: {
                icon: '/home/icons/ln.svg',
                alt: 'Home'
            },
            hover: {
                icon: '/home/icons/lh.svg',
                alt: 'Home'
            },
            active: {
                icon: '/home/icons/la.svg',
                alt: 'Home'
            },
        }
    },
    {
        id: 'about',
        href: siteConfig.pageList.about.href,
        status: {
            normal: {
                icon: '/home/icons/cn.svg',
                alt: 'Home'
            },
            hover: {
                icon: '/home/icons/ch.svg',
                alt: 'Home'
            },
            active: {
                icon: '/home/icons/ca.svg',
                alt: 'Home'
            },
        }
    },
]

export enum StatusEnum {
    normal = 'normal',
    hover = 'hover',
    active = 'active',
}

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
