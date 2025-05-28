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
export const unsignToken = async (token: string): Promise<JwtPayload | string> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, content) => {
      if (err) {
        reject(err);
      }
      if (!content) {
        reject("content is undefined");
      }
      resolve(content as string | JwtPayload);
    })
  })
}