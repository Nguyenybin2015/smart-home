import * as userService from "../services/user.service";

export function getAllUser({ set }: any) {
  try {
    set.status = 200;
    const result  = userService.getAllUserService({ set })
    return result;
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export async function getUserByID({ set, jwt, bearer, cookie }: any) {
  try {
    const { id }: any = await jwt.verify(bearer);
    set.status = 200;
    return userService.getUserByIDService({ set }, id);
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export function resetPasswordController({ set, body }: any){
  try {
    set.status = 200;
    return userService.resetPassword({ set, body });
  } catch (error) {
    set.status = 500;
    return error;
  }
}