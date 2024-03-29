module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "orders",
    {
      userid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  return Order;
};
