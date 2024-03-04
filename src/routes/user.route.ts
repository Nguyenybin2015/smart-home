import { Elysia } from "elysia";
import { usersController } from "../controllers/user.controller";

const user = new Elysia({ prefix: "/user" });

// user.get("/", () => "user");
// user.get("/info", () => "info user");
user.use(usersController);

export default user;
