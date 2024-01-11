import { Elysia } from "elysia";

const user = new Elysia().get("/admin", () => "admin routes");

export default user;