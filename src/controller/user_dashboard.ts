
import { NextFunction, Request, Response } from "express";
import getUserDashboardStatsDB from "../db/user_categories_stats_DB";
const userDashboard = async (req: Request, res: Response, _: NextFunction) => {
  const { email, id, name }: { email: string, id: number, name: string } = res.locals.userTokenData;

  const userStats = await getUserDashboardStatsDB(id);

  res.send(null);
};
export default userDashboard;
