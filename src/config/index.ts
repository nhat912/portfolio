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
        studies: {
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
    url: 'http://localhost:3001',
    mobileWidth: '(max-width: 640px)'
}