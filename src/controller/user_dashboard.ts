import { NextFunction, Request, Response } from "express";
const userDashboard = async (req: Request, res: Response, _: NextFunction) => {
  res.send(null)
};
export default userDashboard;
