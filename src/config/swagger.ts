import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";

export const swaggerConfig = (app: Elysia) => 
  app.use(
    swagger({
      path: "/v1/swagger",
      documentation: {
        info: {
          title: "Bun.js CRUD app with Elysia.js",
          version: "1.0.0",
        },
      },
    }),
  );
