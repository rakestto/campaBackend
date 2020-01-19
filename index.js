const container = require("./api/container");
const application = container.resolve("app");
const db = container.resolve("db");

db.sequelize.sync({ force: false }).then(application.start());
