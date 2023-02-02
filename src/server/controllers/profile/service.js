import data from "../../repositories/user";

export const getProfile = (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(100), ctx.json(data));
};
