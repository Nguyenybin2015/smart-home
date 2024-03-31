import { IDevice } from "../Interface/IDevice";
import { Light } from "./Light.model";
import { Door } from "./door.model";
import { Fan } from "./fan.model";

export function createDevice(type: string, name: string): IDevice {
  switch (type) {
    case "light":
      return new Light(name);
    case "fan":
      return new Fan(name);
    case "door":
      return new Door(name);
    default:
      throw new Error(`Loại thiết bị không hợp lệ: ${type}`);
  }
}