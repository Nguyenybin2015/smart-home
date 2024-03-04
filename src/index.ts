import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { helmet } from "elysia-helmet";
import { swaggerConfig } from "./config/swagger";
import cookie from "@elysiajs/cookie";
import routes from "./routes/index";
import jwt from "@elysiajs/jwt";
import "./config/db";

const app = new Elysia().get("/", () => "Hello Elysia");

app.use(cors());
app.use(helmet());
app.use(cookie());
app.use(swaggerConfig);
app.use(
  jwt({
    name: "jwt",
    secret: process.env.JWT_ACCESS_SECRET as string,
  }),
);

app.use(routes);

app.listen(process.env.PORT || 5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
