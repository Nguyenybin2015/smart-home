import { Light } from "../models/device/Light.model";
import { Door } from "../models/device/door.model";
import { Fan } from "../models/device/fan.model";
export function ledControlService({set}: any) {
  try {
    set.status = 200;
    const ledOn = new Light('bin');
    ledOn.turnOn();
  } catch (error) {
    set.status = 409;
    return error;
  }
}
export function fanControlService({set}: any) {
  try {
    set.status = 200;
    const fanON = new Fan('bin');
  } catch (error) {
    set.status = 409;
    return error;
  }
}
export function doorControlService({set}: any) {
  try {
    set.status = 200;
    const doorON = new Door('bin');
  } catch (error) {
    set.status = 409;
    return error;
  }
}
