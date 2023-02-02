import { rest } from "msw";
import * as Service from "./service";

const profileController = [rest.get("/api/profile", Service.getProfile)];

export default profileController;
