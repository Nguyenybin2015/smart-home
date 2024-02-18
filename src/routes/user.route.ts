import { Elysia } from "elysia";
import { jwt } from "@elysiajs/jwt";

const user = new Elysia({ prefix: "/user" });

user.get("/", () => "user");
user.get("/info", () => "info user");

export default user;
