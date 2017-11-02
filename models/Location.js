module.exports = function(sequelize, DataTypes) {
  let Location = sequelize.define("Location", {
    lat: DataTypes.STRING,
    lng: DataTypes.STRING
  });

  Location.associate = function(models) {
    Location.belongsTo(models.User, {
      foreignKey: {
        name: "user_id",
        allowNull: false
      }
    });
  };

  return Location;
};
