module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    "orderitem",
    {
      orderid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  return OrderItem;
};
