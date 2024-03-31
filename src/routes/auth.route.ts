import { Elysia, t } from "elysia";
import * as authController from "../controllers/auth.controller";

const auth = new Elysia({ prefix: "/auth" });

auth.get("/get-otp", authController.getOTPController);
auth.put("/verify-otp", authController.verifyOTPController);

auth.guard({
  body: t.Object({
    email: t.String(),
  }),
});
auth.put("/reset-password", authController.resetPasswordController, {
  body: t.Object({ email: t.String() }),
});
auth.guard({
  body: t.Object({
    email: t.String(),
    password: t.String(),
  }),
});
auth.post("/login", authController.loginController);
auth.guard({
  body: t.Object({
    name: t.String(),
    email: t.String(),
    password: t.String(),
    phoneNumber: t.String(),
  }),
});
auth.post("/register", authController.registerController);

export default auth;
