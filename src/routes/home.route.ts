import { Elysia, t } from "elysia";


const home = new Elysia({ prefix: "/home" });

home.get("/list-mem", "ahihi");
home.post("/add-mem", "add");


export default home;
