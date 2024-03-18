module.exports = (sequelize, DataTypes) => {

    const Image = sequelize.define('Image', {
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    return Image;
}