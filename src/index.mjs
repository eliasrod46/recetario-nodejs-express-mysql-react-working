import mongoose from "mongoose";
import { createApp } from "./createApp.mjs";

// Connect tu mongo ddbb
mongoose
  .connect("mongodb://localhost/express_tutorial")
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(`Error: ${err}`));

// Call main app
const app = createApp();

// Set port & server up
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
