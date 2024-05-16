import mongoose from "mongoose";

export default async function connectDB(mongo_uri) {
  try {
    await mongoose.connect(mongo_uri);
  } catch (error) {
    console.log("Connect to database failed", error);
  }
}
