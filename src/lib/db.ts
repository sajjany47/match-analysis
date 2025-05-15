import mongoose from "mongoose";

const dbConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/match-analyzer", {
      bufferCommands: false,
    })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.log("MongoDB connection error", err);
    });
};

export default dbConnect;
