import data from "./data";

export const getProduct = (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(100), ctx.json(data));
};
