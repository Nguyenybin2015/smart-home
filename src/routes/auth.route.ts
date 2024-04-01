import { Elysia, t } from "elysia";
import * as authController from "../controllers/auth.controller";

const auth = new Elysia({ prefix: "/auth" });

auth.get("/get-otp", authController.getOTPController);
auth.put("/verify-otp", authController.verifyOTPController);


auth.post("/login", authController.loginController, {
  body: t.Object({
    email: t.String(),
    password: t.String(),
  }),
});
auth.post("/register", authController.registerController, {
  body: t.Object({
    name: t.String(),
    email: t.String(),
    password: t.String(),
    phoneNumber: t.String(),
  }),
});

export default auth;
