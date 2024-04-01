import { Auth } from "../models/auth.model";
import { OTP } from "../models/otp.model";

export async function register({ set, body, jwt, setCookie }: any) {
  try {
    const newAuth = new Auth({ set, body, jwt, setCookie });
    const newUser = newAuth.register(body.name, body.email, body.password, body.phoneNumber);
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
    const loginUser = await newAuth.login(body.email, body.password);
    const newOTP = new OTP();
    const otpCode = newOTP.generateOTPcode();
    const mail = await newOTP.sendMail(body.email);
    set.status = 200;
    return { loginUser, otpCode };
  } catch (error) {
    set.status = 409;
    return error;
  }
}
export async function getOTP({ set }: any) {
  try {
    const newOTP = new OTP();
    const otpCode = newOTP.generateOTPcode();
    set.status = 200;
    return { otpCode: otpCode };
  } catch (error) {
    set.status = 409;
    return error;
  }
}
export async function verifyOTP({ set, body }: any) {
  try {
    const newOTP = new OTP();
    const otpCode = newOTP.verifyOTPcode(body.otpCode);
    set.status = 200;
    return otpCode ? true : false;
  } catch (error) {
    set.status = 409;
    return error;
  }
}

