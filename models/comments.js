module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   len: [1]
      // }

  },

  userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
  },

   body: {
        type: DataTypes.STRING,
        allowNull: false,
      }

    },

    


    {
    
      classMethods: {
        associate: function(models) {
          
          Comments.belongsTo(models.Post, {


            //can manually set foreign key equal to the user email
            //id of posts will be foreign key for the user. 
            foreignKey: {
             field: "email",
              allowNull: false
            }
          });
        }
      }
    
  });
  return Comments;
};
