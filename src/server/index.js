import { setupWorker } from "msw";
import productController from "./controllers/product/controller";
import profileController from "./controllers/profile/controller";

export const worker = setupWorker(...productController, ...profileController);
