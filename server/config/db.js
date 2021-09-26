import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to the MongoDB Database with ${con.connection.host}`
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;
