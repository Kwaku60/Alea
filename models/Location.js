module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("Location", {
    Location: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }

  },

  email: {
      type: DataTypes.STRING,
      allowNull: false,
  },

    
    
      // classMethods: {
      //   associate: function(models) {
          
      //     Location.belongsTo(models.Post, {


      //       //can manually set foreign key equal to the user email
      //       //id of posts will be foreign key for the user. 
      //       foreignKey: {
      //        field: "email",
      //         allowNull: false
      //       }
      //     });
      //   }
      // }
    
  });
  return Location;
};
