import express from "express";
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
// import "./strategies/local-strategy.mjs";
// import "./strategies/discord-strategy.mjs";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import { seed } from "./database/seeders/index.mjs";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use(cookieParser("thesecret"));

  //Passport config
  app.use(
    session({
      secret: "thesecret",
      saveUninitialized: true,
      resave: true,
      cookie: {
        maxAge: 60000 * 60,
      },
      store: MongoStore.create({
        client: mongoose.connection.getClient(),
      }),
    })
  );

  //Passport config
  app.use(passport.initialize());
  app.use(passport.session());

  //Routes
  app.use("/api", routes);

  //seed(uncomment to seed)
  seed();

  return app;
}
