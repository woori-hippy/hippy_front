import { rest } from "msw";
import * as productService from "./service";

const productController = [rest.get("/api/product", productService.getProduct)];

export default productController;
