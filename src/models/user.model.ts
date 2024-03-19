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
}
