import mongoose from "mongoose";
import { createApp } from "./createApp.mjs";

// Database connection
mongoose
  .connect("mongodb://localhost/express_tutorial")
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(`Error: ${err}`));

const app = createApp();

// set PORT & server up
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
