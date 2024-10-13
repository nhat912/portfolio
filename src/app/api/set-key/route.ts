import { siteConfig } from '@/src/config';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const body = (await request.json()) as { key: string };
    const cookieStore = cookies();

    try {
        const { key } = body;
        if (!key) {
            cookieStore.delete('key');

            return Response.json(
                {
                    status: 'OK',
                    message: 'Deleted key successfully',
                    data: null,
                },
                {
                    status: 200,
                },
            );
        }

        const expires = new Date();
        expires.setDate(expires.getDate() + 3);

        cookieStore.set('key', key, {
            path: siteConfig.pageList.home.href,
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
            expires,
        });

        return Response.json(
            {
                status: 'OK',
                message: 'Set key successfully',
                data: {
                    key,
                },
            },
            {
                status: 200,
            },
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return Response.json(
            {
                status: 'ERROR',
                message: error.message || 'Set key failed',
                errorCode: error.errorCode || 'ERROR',
                data: null,
            },
            {
                status: 400,
            },
        );
    }
}
