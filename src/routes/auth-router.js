const { Router } = require('express')
const { login, refresh } = require('../controllers/auth-controller')

const authRouter = Router()

authRouter.post('/login', login)
authRouter.post('/refresh', refresh)

module.exports = authRouter