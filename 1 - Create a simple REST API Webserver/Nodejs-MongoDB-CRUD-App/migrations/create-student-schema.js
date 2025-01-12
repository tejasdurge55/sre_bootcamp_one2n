const mongoose = require("mongoose");
const Student = require("../src/models/studentModel");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri =
      "mongodb://root:example@mongo:27017/mydatabase?authSource=admin";

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};

const createSchema = async () => {
  await connectDB();
  await Student.createCollection();
  console.log("Student schema created successfully");
  process.exit(0);
};

createSchema();
