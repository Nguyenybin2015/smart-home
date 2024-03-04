import jwt from "@elysiajs/jwt";
import { Elysia, t } from "elysia";
import { registerController, loginController } from "../controllers/auth.controller";

const auth = new Elysia({ prefix: "/auth" });

auth.guard({
  body: t.Object({
    email: t.String(),
    password: t.String(),
  }),
});

auth.post("/register", registerController);
auth.post("/login", loginController);

export default auth;
