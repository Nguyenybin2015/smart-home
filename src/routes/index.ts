import { Elysia } from "elysia";
import user from './user.route';
import auth from './auth.route';
import control from './control.route';

const routes = new Elysia({ prefix: '/api' });


routes.use(user);
routes.use(control);
routes.use(auth);


export default routes;