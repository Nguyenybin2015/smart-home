import { Auth } from "../models/auth.model";

export async function register({ set, body, jwt, setCookie }: any) {
  try {
    const newAuth = new Auth({ set, body, jwt, setCookie });
    const newUser = newAuth.register(body.email, body.password);
    set.status = 201;
    return newUser;
  } catch (error) {
    set.status = 409;
    return error;
  }
}
export async function login({ set, body, jwt, setCookie }: any) {
  try {
    const newAuth = new Auth({ set, body, jwt, setCookie });
    const loginUser = newAuth.login(body.email, body.password);
    set.status = 200;
    return loginUser;
  } catch (error) {
    set.status = 409;
    return error;
  }
}
