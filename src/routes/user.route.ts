import { Elysia } from "elysia";

const user = new Elysia();
user.get("/user", () => "user routes")

export default user;