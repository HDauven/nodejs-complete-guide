const { DB_HOST, DB_USER, DB_PASS } = process.env;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/shop?retryWrites=true`
  )
    .then(client => {
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

module.exports.mongoConnect = mongoConnect;
module.exports.getDb = getDb;
