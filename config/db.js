const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    const MONGO_URL = "mongodb://127.0.0.1:27017/MyBlogTinfo"
    // await mongoose.connect(process.env.MONGO_URL);
    await mongoose.connect(MONGO_URL);
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
