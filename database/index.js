const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT
})

try {
    sequelize.authenticate()
    console.log('database connected successfully')
}catch(error) {
    console.log('not connected', error)
}

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('../models').user (sequelize, DataTypes)
db.task = require('../models').task (sequelize, DataTypes)
db.user_task = require('../models').user_task (sequelize, DataTypes)



// db.user.hasMany(db.task, { foreignKey: 'userId' })
// db.task.belongsTo(db.user)

db.user.belongsToMany(db.task, {through: 'user_task'})
db.task.belongsToMany(db.user, {through: 'user_task'})

db.sequelize.sync({force: false})

module.exports = db