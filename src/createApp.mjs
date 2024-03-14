import express from "express";
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import "./strategies/local-strategy.mjs";
// import "./strategies/discord-strategy.mjs";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use(cookieParser("helloworld"));

  //Passport config
  app.use(
    session({
      secret: "anson the dev",
      saveUninitialized: true,
      resave: false,
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
  app.use(routes);

  return app;
}
