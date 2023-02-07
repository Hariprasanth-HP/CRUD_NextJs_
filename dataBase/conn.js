const MONGO_URI =
  "mongodb+srv://hariprasanth:hariHP2726@cluster0.6r5uyfv.mongodb.net/?retryWrites=true&w=majority";
import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    console.log("MONGO_URI", process.env.MONGO_URI);
    const { connection } = await mongoose.connect(MONGO_URI);
    console.log("connection", connection);
    if (connection.readyState == 1) {
      console.log("Database connected");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
export default connectMongo;
