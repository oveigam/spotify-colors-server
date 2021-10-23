const Http500Error = require("../errors/http-500-error")
const SpotifyApi = require("../util/spotify-api")

exports.login = async (req, res, next) => {
    try {
        const { code } = req.body

        const api = SpotifyApi.getClient()

        const authData = await api.authorizationCodeGrant(code)

        const { access_token, refresh_token, expires_in } = authData.body

        res.json({
            accessToken: access_token,
            refreshToken: refresh_token,
            expiresIn: expires_in
        })

    } catch (error) {
        console.error('[ERROR][authController.login]', error)
        return next(new Http500Error(error))
    }
}

exports.refresh = async (req, res, next) => {
    try {
        const { refreshToken } = req.body

        const api = SpotifyApi.getClient()
        api.setRefreshToken(refreshToken)


        const refreshData = await api.refreshAccessToken()

        const { access_token, expires_in } = refreshData.body

        res.json({
            accessToken: access_token,
            expiresIn: expires_in
        })

    } catch (error) {
        console.error('[ERROR][authController.refresh]', error)
        return next(new Http500Error(error))
    }
}