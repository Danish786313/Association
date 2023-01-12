'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {foreignKey: 'user_id', sourceKey: 'id'})// jaha per model ke under foriefn key hot hai waha 
                                                          // hum belong to lagate hai jaha foriegn key nahi hoti
                                                          // waha hum hasOne ya hasMany lagate hai
    }
  }
  product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};