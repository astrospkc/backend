// connecting to mongodb
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebookdb";
// "mongodb+srv://punam-k:<123mongs%23%40A>@cluster0.fvxiezu.mongodb.net/test";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to mongo successfully");
  });
};
module.exports = connectToMongo;
