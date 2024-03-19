import User from "../schema/user";
export class Auth {
  [x: string]: any;

  constructor({ set, jwt, setCookie }: any) {
    this.set = set;
    this.jwt = jwt;
    this.setCookie = setCookie;
  }
  async register(email: string, password: string) {
    const newUser = new User();

    newUser.email = email;
    newUser.password = await Bun.password.hash(password);

    const savedUser = await newUser.save();

    const token = await this.generateToken(savedUser._id);

    this.setupToken(token);

    return {
      data: newUser,
      token: token,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    };
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ email: email }, email);
    const userProfile = await User.findById(user);

    const isMatch = await Bun.password.verify(
      password,
      userProfile?.password as string,
    );

    if (!isMatch) {
      this.set.status = 401;
      return "Wrong password !";
    }

    const token = await this.generateToken(userProfile?._id);

    this.setupToken(token);
    return {
      message: "You are logged in!",
      token: token,
    };
  }

  private async generateToken(userId: string) {
    return await this.jwt.sign({ id: userId });
  }

  public setupToken(token: string) {
    this.set.headers = {
      "X-Authorization": token,
    };
    this.setCookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day
    });
  }
}
