module.exports = (sequelize, DataTypes) => {
    const task = sequelize.define('task', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        status: {
            type: DataTypes.ENUM('completed', 'incomplete'),
            defaultValue: 'incomplete',
        }
    },
        { tableName: 'task' }
    )
    return task
}