module.exports = function(sequelize, DataTypes) {
  let Message = sequelize.define("Message", {
    body: DataTypes.TEXT,
    sender: DataTypes.INTEGER
  });

  Message.associate = function(models) {
    Message.belongsTo(models.Rescue, {
        foreignKey: {
            name: 'rescue_id',
            allowNull: false
        }
    });
};

return Message;
};