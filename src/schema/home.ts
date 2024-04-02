import { Document, Schema, model, Types } from "mongoose";
import { IUser } from "./user";

export interface HomeDocument extends Document {
  name: string;
  owner: IUser;
  members: IUser[];
}

const Home = new Schema<HomeDocument>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
});

export default model<HomeDocument>("home", Home);
