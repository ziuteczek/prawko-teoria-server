
import { NextFunction, Request, Response } from "express";
import getUserCategoriesStats from "../db/user_categories_stats_DB";
const userDashboard = async (req: Request, res: Response, _: NextFunction) => {
  // const { email, id, name }: { email: string, id: number, name: string } = res.locals.userTokenData;
  
  const userStats = await getUserCategoriesStats(9);
  
  res.status(200).json(userStats);
};
export default userDashboard;
