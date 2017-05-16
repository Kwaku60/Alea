module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    //   userId: {
    //     type: DataTypes.STRING,
    //   allowNull: true,
      
    // },
    // tags: {
    //   type: DataTypes.TEXT,
    //   allowNull: true,
    //   len: [1],
    //   default: ""
  },

  userEmail: {
      type: DataTypes.STRING,
      allowNull: false
  }

    },



    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          Post.belongsTo(models.User, {


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
  return Post;
};
