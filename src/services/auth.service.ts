import { Auth } from "../models/auth.model";
import { OTP } from "../models/otp.model";

export async function register(
  { set, jwt, setCookie }: any,
  name: string,
  email: string,
  password: string,
  phoneNumber: string,
) {
  try {
    const newAuth = new Auth({ set, jwt, setCookie });
    const newUser = await newAuth.register(name, email, password, phoneNumber);
    const newOTP = new OTP();
    const otpCode = newOTP.generateOTPcode();
    const mail = newOTP.sendMail(email);
    set.status = 201;
    return newUser;
  } catch (error) {
    set.status = 409;
    return error;
  }
}
export async function login({ set, jwt, setCookie }: any, email: string, password: string) {
  try {
    const newAuth = new Auth({ set, jwt, setCookie });
    const loginUser = await newAuth.login(email, password);
    const newOTP = new OTP();
    const otpCode = await newOTP.generateOTPcode();
    const mail = await newOTP.sendMail(email);
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
export async function verifyOTP({ set }: any, code: string) {
  try {
    const newOTP = new OTP();
    const otpCode = newOTP.verifyOTPcode(code);
    set.status = 200;
    return otpCode ? true : false;
  } catch (error) {
    set.status = 409;
    return error;
  }
}
