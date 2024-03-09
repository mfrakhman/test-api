module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "order",
    {
      userid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  return Order;
};
