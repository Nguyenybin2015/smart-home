import { Elysia } from "elysia";
import user from './user.route';
import admin from './admin.route';

const routes = new Elysia({ prefix: '/api' });

routes.use(user);
routes.use(admin); 

export default routes;