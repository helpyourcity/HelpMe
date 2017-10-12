module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
      },
    last_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
      },
    password: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['user', 'helper', 'helpee']
      },
    phone: DataTypes.STRING
    })

    User.associate = function(models) {
      User.hasMany(models.Location, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        }
      });
    };
      return User;
    };





