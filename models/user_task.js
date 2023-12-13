module.exports = (sequelize, DataTypes) => {
    const user_task = sequelize.define('user_task', {
    }, {
        primaryKey: true,
        uniqueKeys: {
            unique_user_task: {
                fields: ['userId', 'taskId']
            }
        }
    })
    return user_task
}