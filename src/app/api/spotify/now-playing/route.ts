import { getNowPlaying } from '@/lib/spotify';
import { NextResponse } from 'next/server';

export const revalidate = 30;

export async function GET() {
    try {
        const data = await getNowPlaying();

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching Last.fm data:', error);
        return NextResponse.json(
            { isPlaying: false, error: 'Failed to fetch data' },
            { status: 200 }
        );
    }
}
