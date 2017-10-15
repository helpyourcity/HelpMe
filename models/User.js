module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
      },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
      },
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    active: DataTypes.BOOLEAN
    });

    User.associate = function(models) {
      User.hasMany(models.Location, {
        foreignKey: {
          name: 'user_id',
          allowNull: true
        }
      });
    };
      return User;
    };





