/**
 * Spotify Refresh Token Generator
 * 
 * This script helps you generate a Spotify refresh token for the Now Playing integration.
 * 
 * Steps:
 * 1. Get your Client ID and Client Secret from Spotify Developer Dashboard
 * 2. Run this script: node scripts/get-spotify-token.js
 * 3. Follow the instructions to authorize and get your refresh token
 */

const readline = require('readline');
const https = require('https');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    console.log('\n🎵 Spotify Refresh Token Generator\n');

    const clientId = await question('Enter your Spotify Client ID: ');
    const clientSecret = await question('Enter your Spotify Client Secret: ');

    console.log('\n📋 Step 1: Authorize your application');
    console.log('\nOpen this URL in your browser:\n');
    console.log(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3000/api/spotify/callback&scope=user-read-currently-playing%20user-read-playback-state`);
    console.log('\n');

    const code = await question('After authorizing, paste the "code" parameter from the redirect URL: ');

    console.log('\n🔄 Exchanging code for refresh token...\n');

    const data = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code.trim(),
        redirect_uri: 'http://localhost:3000/api/spotify/callback',
    });

    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const options = {
        hostname: 'accounts.spotify.com',
        path: '/api/token',
        method: 'POST',
        headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': data.toString().length,
        },
    };

    const req = https.request(options, (res) => {
        let body = '';

        res.on('data', (chunk) => {
            body += chunk;
        });

        res.on('end', () => {
            try {
                const response = JSON.parse(body);

                if (response.error) {
                    console.error('❌ Error:', response.error_description || response.error);
                    rl.close();
                    return;
                }

                console.log('✅ Success! Here are your tokens:\n');
                console.log('Add these to your .env.local file:\n');
                console.log(`SPOTIFY_CLIENT_ID=${clientId}`);
                console.log(`SPOTIFY_CLIENT_SECRET=${clientSecret}`);
                console.log(`SPOTIFY_REFRESH_TOKEN=${response.refresh_token}`);
                console.log('\n');

                rl.close();
            } catch (error) {
                console.error('❌ Error parsing response:', error.message);
                console.error('Response:', body);
                rl.close();
            }
        });
    });

    req.on('error', (error) => {
        console.error('❌ Request error:', error.message);
        rl.close();
    });

    req.write(data.toString());
    req.end();
}

main().catch(error => {
    console.error('❌ Error:', error.message);
    rl.close();
    process.exit(1);
});
