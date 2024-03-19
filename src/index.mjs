import { createApp } from "./createApp.mjs";
import { mongoDBConnection } from "./database/connectionDB.mjs";

// Database connection
mongoDBConnection();

const app = createApp();

// set PORT & server up
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
