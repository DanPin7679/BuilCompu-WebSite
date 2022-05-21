import mongoose from "mongoose";
let url =
  "mongodb+srv://danpin:danpin-123@cluster0.omzfr.mongodb.net/build-computer?retryWrites=true&w=majority";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
