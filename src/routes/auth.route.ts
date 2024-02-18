import { Elysia } from "elysia";

const auth = new Elysia({ prefix: "/auth" });

auth.post('/register', () => "register")
auth.post('/login', () => "login")

export default auth;