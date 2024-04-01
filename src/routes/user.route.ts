import { Elysia, t } from "elysia";
import bearer from "@elysiajs/bearer";
import jwt from "@elysiajs/jwt";
import isAuth from "../middlewares/isAuth";
import * as userController from "../controllers/user.controller";


const user = new Elysia({ prefix: "/user" });

user
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_ACCESS_SECRET as string,
    }),
  )
  .use(bearer());
user.get("/all", userController.getAllUser);
user.get("/info", userController.getUserByID, { beforeHandle: isAuth });
user.put("/reset-password", userController.resetPasswordController, {
  body: t.Object({ email: t.String() }),
});

export default user;
