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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    lat: DataTypes.STRING,
    lng: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Location, {
      foreignKey: {
        name: "user_id",
        allowNull: false
      }
    });
  };
  return User;
};
