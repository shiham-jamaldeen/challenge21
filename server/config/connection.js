const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI ||
  "mongodb://127.0.0.1:27017/googlebooks" ||
  "mongodb+srv://shiham-jamaldeen:<password>@cluster0.cejzrlx.mongodb.net/?retryWrites=true&w=majority";
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
