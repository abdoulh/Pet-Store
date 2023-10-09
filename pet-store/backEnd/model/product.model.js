module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {

        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });

    return User;


}