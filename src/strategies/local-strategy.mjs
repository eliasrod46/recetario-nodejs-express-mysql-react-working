import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../database/models/auth/user.mjs";
import { comparePassword } from "../utils/helpers.mjs";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await User.findById(id);
    if (!findUser) throw new Error("User Not Found");
    done(null, findUser);
  } catch (err) {
    done(err, null);
  }
});

export default passport.use(
  new Strategy(async (email, password, done) => {
    try {
      console.log("asd");
      // const findUser = await User.findOne({ email });
      // if (!findUser) throw new Error("User not found");
      // if (!comparePassword(password, findUser.password))
      //   throw new Error("Bad Credentials");
      done(null, "findUser");
    } catch (err) {
      done(err, null);
    }
  })
);
