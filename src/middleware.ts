import { siteConfig } from '@/src/config';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const privatePaths: string[] = [
    siteConfig.pageList.insuranceFeature.href,
    siteConfig.pageList.technicianApp.href,
    siteConfig.pageList.technicianOrder.href,
    siteConfig.pageList.vehicleWashApp.href,
    siteConfig.pageList.vpBank.href,
    siteConfig.pageList.waveB.href,
];


export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const keyValue = request.cookies.get('key')?.value;
    const isAuth = !!keyValue && keyValue === process.env.NEXT_PUBLIC_PRIVATE_CODE;

    // Chưa nhập key thì không cho vào private paths
    if (!isAuth && privatePaths.some((path) => pathname.startsWith(path))) {
        const callbackUrl = pathname;
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);

        return NextResponse.redirect(new URL(`${siteConfig.pageList.home.href}?callbackUrl=${encodedCallbackUrl}`, request.url));
    }


    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
