
import { NextFunction, Request, Response } from "express";
import userDashboardDB from "../db/user_stats_DB";
const userDashboard = async (req: Request, res: Response, _: NextFunction) => {
  const { email, id, name }: { email: string, id: number, name: string } = res.locals.userTokenData;
  
  

  res.send(null);
};
export default userDashboard;
