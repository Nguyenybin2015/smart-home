import * as authService from "../services/auth.service";


export async function registerController ({ set, body, jwt, setCookie }: any) {
  try {
    set.status = 200;
    return authService.register({ set, body, jwt, setCookie });
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export async function loginController ({ set, body, jwt, setCookie }: any) {
  try {
    set.status = 200;
    return authService.login({ set, body, jwt, setCookie });
  } catch (error) {
    set.status = 500;
    return error;
  }
}