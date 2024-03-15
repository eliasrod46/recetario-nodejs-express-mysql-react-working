import mongoose from "mongoose";

// Database connection
export const mongoDBConnection = () => {
  mongoose
    .connect("mongodb://localhost/express_tutorial")
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(`Error: ${err}`));
};
