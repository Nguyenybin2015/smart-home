import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string; 
  phoneNumber: string; 
}

const schema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: 'Invalid email format',
      },
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true, 
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true, 
      validate: {
        validator: (v: string) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\./0-9]*$/.test(v),
        message: 'Invalid phone number format',
      },
    },
  },
  {
    timestamps: true, 
  }
);

export default model<IUser>('user', schema);
