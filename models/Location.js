module.exports = function(sequelize, DataTypes) {
    let Location = sequelize.define("Location", {
      house_number: DataTypes.INTEGER,
      street: DataTypes.STRING,
      unit: DataTypes.STRING,
      apt_num: DataTypes.STRING, 
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip_code: DataTypes.INTEGER,
      geo_point: DataTypes.GEOMETRY('POINT'),  
});
    
        Location.associate = function(models) {
            Location.belongsTo(models.User, {
                foreignKey: {
                    name: 'user_id',
                    allowNull: false
                }
            });
        };
      
    return Location;
  };