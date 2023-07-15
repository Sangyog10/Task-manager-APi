const mongoose = require("mongoose");

const connectToDb = (url) => {
  return mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
module.exports = connectToDb;
