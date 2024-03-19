import { getAllUserService, getUserByIDService } from "../services/user.service";

export function getAllUser({ set }: any) {
  try {
    set.status = 200;
    const result  = getAllUserService({ set })
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
    return getUserByIDService({ set }, id);
  } catch (error) {
    set.status = 500;
    return error;
  }
}
