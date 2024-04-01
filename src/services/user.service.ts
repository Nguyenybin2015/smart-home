import User from "../schema/user";
import { user } from "../models/user.model";
import { OTP } from "../models/otp.model";
import { login } from "./auth.service";
export async function getAllUserService({ set }: any) {
  try {
    const users = await User.find({});
    set.status = 200;
    return users;
  } catch (error) {
    set.status = 409;
    return error;
  }
}
export async function getUserByIDService({ set }: any, id: string) {
  try {
    const user1 = new user(id);
    const result = await user1.getData();
    set.status = 200;
    return result;
  } catch (error) {
    set.status = 409;
    return error;
  }
}

export async function resetPassword({ set, body }: any) {
  try {
    const bin = await User.findOne({ email: body.email });
    if (bin) {
      const user1 = new user(bin._id.toString());
      const newPassword = await user1.resetPassword();
      const newOTP = new OTP();
      const otpCode = newOTP.sendPass(body.email, newPassword);
      set.status = 200;
      return { newPassword };
    } else {
      console.log("User not found with email:", body.email);
    }
  } catch (error) {
    set.status = 409;
    return error;
  }
}

export async function updatePassword({ set, body }: any) {
  try {
    const bin = await User.findOne({ email: body.email });
    if (bin) {
      const user1 = new user(bin._id.toString());
      const newPassword = await user1.updatePassword(body.password);

      set.status = 200;
      return { newPassword };
    } else {
      console.log("User not found with email:", body.email);
    }
  } catch (error) {
    set.status = 409;
    return error;
  }
}
