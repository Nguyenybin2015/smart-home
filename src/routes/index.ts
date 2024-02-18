import { Elysia } from "elysia";
import user from './user.route';
import auth from './auth.route';

const routes = new Elysia({ prefix: '/api' });


routes.use(user);
routes.use(auth);

export default routes;