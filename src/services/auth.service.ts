import Elysia, { t } from "elysia";
import User, { IUser } from "../schema/user";

async function setAuthToken(userId: string, { set, jwt, setCookie }: any) {
  const token = await jwt.sign({ id: userId });

  const setCookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  };

  set.headers = {
    "X-Authorization": token,
  };

  setCookie("token", token, setCookieOptions);
}
function otpCode() {
  
}
export async function register({ set, body, jwt, setCookie }: any) {
  const newUser = new User();

  const { email, password } = body;
  newUser.email = email;
  newUser.password = await Bun.password.hash(password);

  const savedUser = await newUser.save();

  const token = await jwt.sign({ id: savedUser._id });
  set.headers = {
    "X-Authorization": token,
  };
  setCookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  }); // 1 day

  return newUser;
}
export async function login({ set, body, jwt, setCookie }: any) {
  const user = await User.findOne({ email: body.email }, body.email);
  const userProfile = await User.findById(user);

  const isMatch = await Bun.password.verify(
    body.password,
    userProfile?.password as string,
  );

  if (!isMatch) {
    set.status = 401;
    return "Wrong password !";
  }

  const token = await jwt.sign({ id: userProfile?._id });
  set.headers = {
    "X-Authorization": token,
  };
  set.status = 201;
  setCookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  }); // 1 day
  set.status = 200;
  return {
    message: "You are logged in!",
    token: token,
  };
}

