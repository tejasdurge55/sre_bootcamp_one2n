const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    const mongoUri =process.env.MONGO_URL ||"mongodb://root:example@mongo:27017/mydatabase?authSource=admin";
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};
