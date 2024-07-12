import bcrypt from "bcrypt";
import { SERVER_CONSTANTS } from "../../../config/constants.js";

export const verifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

export const hashPassword = async (password) => {
  const passwordHashed = await bcrypt.hash(
    password,
    SERVER_CONSTANTS.SALT_ROUNDS
  );
  return passwordHashed;
};
