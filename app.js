const express = require("express");
const app = express();
const connectToDb = require("./db/connect");
require("dotenv").config();

const pageNotFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/error-handler");

const taskRoutes = require("./routes/tasks");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", taskRoutes);
app.use(pageNotFound);
app.use(errorHandlerMiddleware); //it will handle all the error

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectToDb(process.env.MONGO_URI);
    app.listen(port, console.log(`Listening to the port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
start();
