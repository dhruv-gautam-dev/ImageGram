import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function connectDB() {

  try {
    await mongoose.connect(DB_URL); 
    console.log("connected to mongoDB");
  } catch (err) {
    console.log("error in connected to mongoDB");
    console.log(err);
  }
}