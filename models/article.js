module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define("Article", {
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }


  },

  userEmail: {
      type: DataTypes.STRING,
      allowNull: false
  }

    




        
      
    
  });
  return Article;
};
