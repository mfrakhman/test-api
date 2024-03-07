//product model
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      productname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      producttype: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productprice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  return Product;
};
