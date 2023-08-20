const mongoose = require("mongoose");

// Making Connecting with mongoDB
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://nitesh0709yadav:nitesh0709yadav@cluster0.zvhnf7r.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database Connected: ", connect.connection.name);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
// Exporting the function
module.exports = connectDb;
