export const getNowPlaying = async () => {
    const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
    const LASTFM_USERNAME = process.env.LASTFM_USERNAME;

    if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
        console.log('Missing Last.fm credentials');
        return { isPlaying: false };
    }

    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`;

    try {
        const response = await fetch(url, {
            cache: 'no-store',
        });

        if (!response.ok) {
            return { isPlaying: false };
        }

        const data = await response.json();
        const track = data.recenttracks?.track?.[0];

        if (!track) {
            return { isPlaying: false };
        }

        // Check if currently playing (has @attr.nowplaying)
        const isPlaying = track['@attr']?.nowplaying === 'true';

        const title = track.name;
        const artist = track.artist['#text'] || track.artist.name;
        const album = track.album['#text'];

        // Get the largest image available
        const images = track.image || [];
        const albumImageUrl = images.find((img: any) => img.size === 'extralarge')?.['#text']
            || images.find((img: any) => img.size === 'large')?.['#text']
            || images[images.length - 1]?.['#text']
            || null;

        const songUrl = track.url;

        return {
            isPlaying,
            title,
            artist,
            album,
            albumImageUrl,
            songUrl,
        };
    } catch (error) {
        console.error('Error fetching Last.fm data:', error);
        return { isPlaying: false };
    }
};

export type NowPlayingData = Awaited<ReturnType<typeof getNowPlaying>>;
