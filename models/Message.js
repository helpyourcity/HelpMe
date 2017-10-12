module.export = function(sequelize, DataTypes) {
  let Message = sequelize.define("Message", {
    body: DataTypes.TEXT,
  })


}