//importing modules
const { Sequelize, DataTypes } = require("sequelize");

//local db
// const sequelize = new Sequelize(
//   `postgres://postgres:postgres@localhost:5432/db_platinumtest`,
//   { dialect: "postgres" }
// );

//vercel postgres
const sequelize = new Sequelize(
  `postgres://default:pGCMLoJW1rq8@ep-shiny-forest-a1qk5xyw-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require`,
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
db.orders = require("./order.model")(sequelize, DataTypes);
db.ordersitem = require("./order.item.model")(sequelize, DataTypes);

//exporting the module
module.exports = db;
