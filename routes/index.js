const userRoutes = require('./userRouter')
const taskRoutes = require('./taskRouter')
const user_taskRoutes = require('./user_taskRouter')

module.exports = (app) => {
    app.use('/', userRoutes)
    app.use('/', taskRoutes)
    app.use('/', user_taskRoutes)
}