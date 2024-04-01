import { password } from "bun";
import User from "../schema/user";
export class user {
  private _id: string;
  constructor(id: string) {
    this._id = id;
  }
  getId() {
    return this._id;
  }
  setId(id: string) {
    this._id = id;
  }
  async getData() {
    const result = await User.findOne({ _id: this._id });
    return result;
  }
  private generateRandomPassword(length = 12): string {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
  async resetPassword(): Promise<string> {
    const newPassword = this.generateRandomPassword();
    const passwordHashed = await Bun.password.hash(newPassword);
    const filter = { _id: this._id };
    const update = { password: passwordHashed };
    const user = await User.findOneAndUpdate(filter, update, {
      new: true,
    });
    return newPassword;
  }
  async updatePassword(newPassword: string) {
    const passwordHashed = await Bun.password.hash(newPassword);
    const filter = { _id: this._id };
    const update = { password: passwordHashed };
    const user = await User.findOneAndUpdate(filter, update, {
      new: true,
    });
    return user;
  }
}
