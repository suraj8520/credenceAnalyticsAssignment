import dotenv from "dotenv";
import connectDB from "./database/connection.js";
import app from "./app.js";

dotenv.config();

const port = process.env.PORT || 3000;
const mongo_uri = process.env.MONGODB_CONNECTION_URI;

const startServer = async () => {
  try {
    await connectDB(mongo_uri);
    app.listen(port, () => {
      console.log("App is listening on port " + port);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
