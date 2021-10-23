const express = require('express')
const cors = require('cors')
const authRouter = require('./src/routes/auth-router')
const handleUnknownRoute = require('./src/middleware/handleUnknownRoute')
const handleErrors = require('./src/middleware/error-handler')

const app = express()

// Config
app.setMaxListeners(0)
app.use(cors())
app.use(express.json())

// Rutas API
app.use('/api/auth', authRouter)

// Middlewares de rutas desconocidas y errores
app.use(handleUnknownRoute)
app.use(handleErrors)

// Inicio
app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on port ${process.env.PORT || 5000}`)
})