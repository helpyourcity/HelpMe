module.export = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
      },
    password: DataTypes.STRING,
    status: {
      type: Sequelize.ENUM,
      values: ['user', 'helper', 'helpee']
      },
    phone: DataTypes.STRING
    }

    User.associate = function(models) {
      User.hasMany(models.Location, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        }
      });
    }


  })
}
