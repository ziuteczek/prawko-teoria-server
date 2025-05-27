import jwt, { JwtPayload } from "jsonwebtoken";

export const signToken = async (content: JwtPayload): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      content,
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" },
      (err, encoded) => {
        if (err) return reject(err);
        if (typeof encoded === "string") return resolve(encoded);
        reject(new Error("Token is undefined"));
      }
    );
  });
};
