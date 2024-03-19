import User from "../schema/user";
import { user } from "../models/user.model";
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
