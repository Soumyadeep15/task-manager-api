module.exports = (sequelize, DataTypes) => {
   const user = sequelize.define('user', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {}
    )
    return user
}