const { dbConfig } = require("../config");

module.exports = {
  mongoURI: `mongodb+srv://alvaroa:${dbConfig.dbPassword}@cluster1.pjhkw.mongodb.net/${dbConfig.dbName}?retryWrites=true&w=majority`,
  secretOrKey: "secret",
};
