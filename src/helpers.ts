import jwt, { JwtPayload } from "jsonwebtoken";
import argon2 from "argon2";
import { readFileSync } from "fs";
import messages from "./lang/pl.json" assert { type: "json" };
import { userTokenData } from "./env";
import { json } from "stream/consumers";

export const signToken = async (
  content: string | Buffer | object,
  options: jwt.SignOptions = {}
): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      content,
      process.env.JWT_SECRET as string,
      options,
      (err, encoded) => {
        if (err) return reject(err);
        if (typeof encoded === "string") return resolve(encoded);
        reject(new Error("Token is undefined"));
      }
    );
  });
};
export const unsignToken = async (
  token: string
): Promise<userTokenData | string | undefined> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET as string, (err, content) => {
      if (err) {
        reject(err);
      }
      if (!content) {
        reject("content is undefined");
      }
      resolve(content as userTokenData | string | undefined);
    });
  });
};
/**
 * A regular expression to validate passwords.
 *
 * The password must meet the following criteria:
 * - Contain at least one digit (`\d`).
 * - Contain at least one lowercase letter (`a-z`).
 * - Contain at least one uppercase letter (`A-Z`).
 * - Contain at least one alphabetic character (either lowercase or uppercase).
 * - Be between 8 and 32 characters in length.
 */
export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/;
/**
 * Regular expression to validate email addresses.
 *
 * This regex ensures that the email address:
 * - Starts with alphanumeric characters, underscores, hyphens, or dots.
 * - Contains an "@" symbol followed by a domain name.
 * - The domain name consists of alphanumeric characters and hyphens, separated by dots.
 * - Ends with a valid top-level domain (TLD) of 2 to 4 characters.
 */
export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const hash = async (secret: Buffer | string) => {
  return await argon2.hash(secret);
};
export const verifyHash = async (
  hashed: string,
  comparator: Buffer | string
) => {
  return await argon2.verify(hashed, comparator);
};

export const logErrorDEV = (err: Error | string) => {
  const mode = process.env.MODE;
  if (mode === "dev") {
    console.error(err);
  }
};

export const logDEV = (text: string) => {
  console.log(text);
};

const langPL = JSON.parse(
  readFileSync(`${import.meta.dirname}/lang/pl.json`).toString()
);

export const getFailResponse = (message: keyof typeof messages.auth) => {
  const responseMessage = langPL.auth[message];
  if (!responseMessage) {
    throw new Error(`Message ${String(message)} not defined`);
  }
  return {
    status: "fail",
    message: responseMessage,
  };
};
export const JsonParse = (textJSON: string | any) => {
  try {
    const jsonObj = JSON.parse(textJSON);
    return jsonObj;
  } catch (err: any) {
    logErrorDEV(err);
    return undefined;
  }
};
