import mongoose from "mongoose";

import { NODE_ENV, DB_URL} from "../config/env.js";

if (!DB_URL) {
  throw new error(
    "Please define the MONGODB_URL environment variable inside .env.<development/production>.local"
  );
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);

    console.log(`MongoDB connected to database ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
export default connectDB;
