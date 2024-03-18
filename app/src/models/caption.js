const UserGen = require('./user.js');
const ImageGen = require('./image');


module.exports = (sequelize, DataTypes) => {

    const Caption = sequelize.define('Caption', {
        captionText: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    const User = UserGen(sequelize, DataTypes);
    const Image = ImageGen(sequelize, DataTypes);

    Caption.belongsTo(User); // A caption belongs to a user
    User.hasMany(Caption); // A user can have multiple captions

    Caption.belongsTo(Image); // A caption belongs to an image
    Image.hasMany(Caption); // An image can have multiple captions

    return Caption;

};