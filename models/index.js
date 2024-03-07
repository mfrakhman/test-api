//importing modules
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://postgres:postgres@localhost:5432/db_platinumtest`,
  { dialect: "postgres" }
);

//checking if connection is done
sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected to db_platinumtest`);
  })
  .catch(err => {
    console.log(err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//connecting to model
db.users = require("./user.model")(sequelize, DataTypes);
db.products = require("./product.model")(sequelize, DataTypes);

//exporting the module
module.exports = db;
