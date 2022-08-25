const { MongoClient } = require("mongoDb");
require("dotenv").config();

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(process.env.DB_URI)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(error);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
