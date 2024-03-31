import mongoose, { Document, Schema, model } from 'mongoose';

export interface ILEDState extends Document {
  isOn: boolean; // Boolean flag indicating LED state (on/off)
  user: mongoose.Schema.Types.ObjectId; // Reference to the User document using ObjectId
}

const ledSchema = new Schema<ILEDState>({
  isOn: {
    type: Boolean,
    required: true,
    default: false 
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  }
});

export default model<ILEDState>('LEDState', ledSchema);
