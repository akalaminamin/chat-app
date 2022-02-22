const mongoose = require("mongoose");
require("dotenv").config();
// const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.deaij.mongodb.net/chat_app?retryWrites=true&w=majority `;
const db = "mongodb://localhost:27017/chat_app"
const connectDB = async () => {
  try {
    await mongoose.connect(
      db
      //     {
      //   useNewUrlParsar: true,
      //   useUnifiedTopology: true,
      //   useFindAndModify: true,
      // };
    );
    console.log("Connection Successfull");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

module.exports = connectDB;
