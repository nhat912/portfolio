import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const body = (await request.json()) as { keyword: string };
    const cookieStore = cookies();

    try {
        const { keyword } = body;
        if (!keyword) {
            cookieStore.delete('keyword');

            return Response.json(
                {
                    status: 'OK',
                    message: 'Deleted keyword successfully',
                    data: [],
                },
                {
                    status: 200,
                },
            );
        }

        cookieStore.set('keyword', keyword, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
            expires: new Date(),
        });

        return Response.json(
            {
                status: 'OK',
                message: 'Set keyword successfully',
                data: [],
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
                message: error.message || 'Set keyword failed',
                errorCode: error.errorCode || 'ERROR',
                data: null,
            },
            {
                status: 400,
            },
        );
    }
}
