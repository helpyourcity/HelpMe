module.export = function(sequelize, DataTypes) {
    let Rescue = sequelize.define("Rescue", {
      helper_id: DataTypes.INTEGER,
      helpee_id: DataTypes.INTEGER,
      time_start:DataTypes.DATE,
      time_closed:DataTypes.DATE,
      reason_ended: {
        type: Sequelize.ENUM,
        values: ['success', 'fail', 'other']
        },
        help_type_needed: DataTypes.TEXT,
      });
    
      Rescue.associate = function(models) {
        Rescue.hasMany(models.Messages, {
          foreignKey: {
            name: 'rescue_id',
            allowNull: false
          }
        });
      };
        return Rescue;
      };
  
    
    
  
  
  