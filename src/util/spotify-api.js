const SpotifyWebApi = require('spotify-web-api-node')

class SpotifyApi {

    static getClient() {
        return new SpotifyWebApi({
            redirectUri: process.env.SPOTIFY_REDIRECT_URL,
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET
        })
    }

}

module.exports = SpotifyApi