const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const chats = require("./data/data");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/database");
const userRouter = require("./routes/userRouter");
const {notFound, errorHandler} = require("./middlewares/errorMiddleware");
// Request parser
app.use(express.json());
app.use(cors());

// connection database
connectDB()

app.get("/", (req, res) => {
  res.send("In The name of Allah");
});

// Router
app.use("/api/user", userRouter)

// error handler middleware
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
