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

export async function resetPassword({ set }: any, email: string) {
  try {
    const bin = await User.findOne({ email: email });
    if (bin) {
      const user1 = new user(bin._id.toString());
      const newPassword = await user1.resetPassword();
      const newOTP = new OTP();
      const otpCode = newOTP.sendPass(email, newPassword);
      set.status = 200;
      return { newPassword };
    } else {
      console.log("User not found with email:", email);
    }
  } catch (error) {
    set.status = 409;
    return error;
  }
}

export async function updatePassword(
  { set }: any,
  id: string,
  oldPassword: string,
  newPassword: string,
) {
  try {
    const bin = await User.findOne({ _id: id });

    if (bin) {
      const user1 = new user(id);
      const isMatch = await Bun.password.verify(
        oldPassword,
        bin?.password as string,
      );
      if (!isMatch) {
        set.status = 401;
        return "Wrong password !";
      }
      const result = await user1.updatePassword(newPassword);
      set.status = 200;
      return { newPassword };
    } else {
      console.log("User not found");
    }
  } catch (error) {
    set.status = 409;
    return error;
  }
}
