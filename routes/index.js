const userRoutes = require('./userRouter')
const taskRoutes = require('./taskRouter')

module.exports = (app) => {
    app.use('/', userRoutes)
    app.use('/', taskRoutes)
}