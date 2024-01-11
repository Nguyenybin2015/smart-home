import { Elysia } from 'elysia';
import * as cors from "@elysiajs/cors";
import routes from "./routes/index";

const app = new Elysia().get("/", () => "Hello Elysia");

app.use(cors.cors());
app.use(routes);

app.listen(Bun.env.PORT || 5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
