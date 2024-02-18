import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { helmet } from 'elysia-helmet';
import { swaggerConfig } from "./config/swagger";
import routes from "./routes/index";
import "./config/db";

const app = new Elysia().get("/", () => "Hello Elysia");

app.use(cors());
app.use(helmet());
app.use(routes);

app.use(swaggerConfig);

app.listen(process.env.PORT || 5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
