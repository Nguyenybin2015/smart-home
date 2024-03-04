import { Elysia, t } from "elysia";
import User, { IUser } from "../schema/user";
import isAuth from "../middlewares/isAuth";
import cookie from "@elysiajs/cookie";
import jwt from "@elysiajs/jwt";

export const usersController = new Elysia()
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_ACCESS_SECRET as string,
    }),
  )
  // Get all users
  // .get(
  //   "/",
  //   async ({ set, cookie, jwt }) => {
  //     const users = await User.find({});
  //     set.status = 200;
  //     return users;
  //   },
  //   { beforeHandle: isAuth },
  // )
  // Get me
  .get(
    "/me",
    async ({ set, cookie, jwt }) => {
      const { id }: any = await jwt.verify(cookie.token.value);

      const user = await User.find({ _id: id });

      set.status = 200;
      return user[0];
    },
    { beforeHandle: isAuth },
  )
  // Logout
  .get("/logout", async ({ set, cookie }) => {
    try {
      cookie.token.remove();
      set.status = 200;
      return "You are logged out !";
    } catch (error) {
      set.status = 500;
      return error;
    }
  })
  // Guard
  .guard(
    {
      body: t.Object({
        email: t.String(),
        password: t.String(),
      }),
    },
    (app) =>
      app
        .use(cookie())
        // Login
        .post("/login", async ({ set, body, jwt, setCookie }) => {
          try {
            const user = await User.findOne({ email: body.email }, body.email);
            const userProfile = await User.findById(user);

            const isMatch = await Bun.password.verify(
              body.password,
              userProfile?.password as string,
            );

            if (!isMatch) {
              set.status = 401;
              return "Wrong password !";
            }

            const token = await jwt.sign({ id: userProfile?._id });
            set.headers = {
              "X-Authorization": token,
            };
            set.status = 201;
            setCookie("token", token, {
              httpOnly: true,
              expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            }); // 1 day

            set.status = 200;
            return {
              message: "You are logged in!",
              token: token,
            };
          } catch (error) {
            set.status = 500;
            console.log(error);
            return error;
          }
        })
        // Register
        .post("/register", async ({ set, body, jwt, setCookie }) => {
          try {
            const newUser = new User();

            const { email, password } = body;
            newUser.email = email;
            newUser.password = await Bun.password.hash(password);

            const savedUser = await newUser.save();

            const token = await jwt.sign({ id: savedUser._id });
            set.headers = {
              "X-Authorization": token,
            };
            setCookie("token", token, {
              httpOnly: true,
              expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            }); // 1 day

            set.status = 200;
            return newUser;
          } catch (error) {
            set.status = 500;
            return error;
          }
        }),
  );
