import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connect to mongoDb")
  }catch(error){
    console.log("Error connecting to MongoDb",error);
  }
};
 export default connectToMongoDb;