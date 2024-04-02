import * as authService from "../services/auth.service";

export async function registerController({ set, body, jwt, setCookie }: any) {
  try {
    set.status = 200;
    const email: string = body.email.toLowerCase()
    return authService.register({ set, jwt, setCookie }, body.name, email, body.password, body.phoneNumber);
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export async function loginController({ set, body, jwt, setCookie }: any) {
  try {
    set.status = 200;
    const email: string = body.email.toLowerCase()
    return authService.login({ set, jwt, setCookie }, email, body.password);
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export function getOTPController({ set }: any) {
  try {
    set.status = 200;
    return authService.getOTP({ set });
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export function verifyOTPController({ set, body }: any) {
  try {
    set.status = 200;
    return authService.verifyOTP({ set }, body.otpCode);
  } catch (error) {
    set.status = 500;
    return error;
  }
}
