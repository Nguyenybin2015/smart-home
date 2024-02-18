import mongoose from "mongoose";

const mongoDBURI = process.env.MONGODB_URI || "mongodb://localhost:27017";

mongoose
  .connect(mongoDBURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

export default mongoose;
