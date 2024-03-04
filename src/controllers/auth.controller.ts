import Elysia, { t } from "elysia";
import { login, register } from "../services/auth.service";
import * as messages from "../utils/ErrorMessages";

export async function registerController ({ set, body, jwt, setCookie }: any) {
  try {
    set.status = 200;
    return register({ set, body, jwt, setCookie });
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export async function loginController ({ set, body, jwt, setCookie }: any) {
  try {
    set.status = 200;
    return login({ set, body, jwt, setCookie });
  } catch (error) {
    set.status = 500;
    return error;
  }
}