import Home from "../schema/home";
import User from "../schema/user";
export class HomeManagement {
  constructor() {}
  async newHome() {
    const newHome = new Home();
    newHome.name = "NHOM 4";
    const email = "nguyenybin2015@gmail.com";
    const newUser = await User.findOne({ email: email });
    console.log(newUser)
    // newHome.owner = newUser._id;
    // newHome.members = newUser._id;
    await newHome.save();
  }
}

try {
  const newHomeManagement = await new HomeManagement();
  await newHomeManagement.newHome();
} catch (error) {
  console.log(error);
}
