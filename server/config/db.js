const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongodb is connected");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = db;
