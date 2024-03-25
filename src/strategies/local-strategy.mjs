import passport from "passport";
import { Strategy } from "passport-local";
import { userDao } from "../database/daos/auth/users.dao.mjs";
import { comparePassword } from "../utils/helpers.mjs";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await userDao.getUser(id);
    if (!findUser) throw new Error("User Not Found");
    done(null, findUser);
  } catch (err) {
    done(err, null);
  }
});

export default passport.use(
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const findUser = await userDao.getUserByEmail(email);
        if (!findUser) throw new Error("User not found");
        if (!comparePassword(password, findUser.password))
          throw new Error("Bad Credentials");
        done(null, findUser);
      } catch (err) {
        done(err, null);
      }
    }
  )
);
