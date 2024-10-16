export const siteConfig = {
    seo: {
        title: "@nhatnguyen",
        description: "@nhatnguyen",
        openGraph: {
            locale: 'en_US',
            alternateLocale: ['vi_VN'],
            type: 'website',
            siteName: 'Bigboy Restaurant',
            images: [
                {
                    url: `/banner.png`
                }
            ]
        }
    },
    paths: {
        home: {
            href: '/',
            as: 'Home'
        },
        caseStudies: {
            href: '/case-studies',
            as: 'Case Studies'
        },
        about: {
            href: '/about',
            as: 'About'
        },
    },
    contact: {
        linkedin: {
            href: '/',
            as: 'Linkedin'
        },
        email: {
            href: 'mailto:nhatnguyen.wk@gmail.com',
            as: 'nhatnguyen.wk@gmail.com'
        }
    },
    url: 'http://jamesnguyendesign.com',
    mobileWidth: '(max-width: 640px)',
    pageList: {
        home: {
            href: '/',
            as: 'Home'
        },
        caseStudies: {
            href: '/case-studies',
            as: 'Case Studies',
            vpBank: {
                href: '/case-studies/vp-bank',
                as: 'VP Bank'
            },
            waveB: {
                href: '/case-studies/wave-b',
                as: 'Wave B'
            }
        },
        about: {
            href: '/about',
            as: 'About'
        },
        washUp: {
            href: '/wash-up',
            as: 'Wash Up',
            insuranceFeature: {
                href: '/wash-up/insurance-feature',
                as: 'Insurance Feature'
            },
            technicianApp: {
                href: '/wash-up/technician-app',
                as: 'Technician App'
            },
            technicianOrder: {
                href: '/wash-up/technician-order',
                as: 'Technician Order'
            },
            vehicleWashApp: {
                href: '/wash-up/vehicle-wash-app',
                as: 'Vehicle Wash App'
            }
        },
        dakoli: {
            href: '/dakoli',
            as: 'Dakoli',
        },
        setKey: {
            href: '/api/set-key',
            as: 'Set Key'
        }
    }
}
