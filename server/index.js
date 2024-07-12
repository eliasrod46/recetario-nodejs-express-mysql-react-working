import { app } from "./app.js";
import { conectionDB } from "./src/database/db.js";
import { SERVER_CONSTANTS } from "./src/config/constants.js";

conectionDB();

app.listen(SERVER_CONSTANTS.PORT, () => {
  console.log(`Server listening in http://localhost:${SERVER_CONSTANTS.PORT}`);
});
