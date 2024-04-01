import { Light } from "../models/device/Light.model";
import { Door } from "../models/device/door.model";
import { Fan } from "../models/device/fan.model";
export function ledControlService({ set, body }: any) {
  try {
    set.status = 200;
    const ledOn = new Light(body.topic);
    const result = ledOn.turnOn();
    return { message: result };
  } catch (error) {
    set.status = 409;
    return error;
  }
}
export function fanControlService({ set, body }: any) {
  try {
    set.status = 200;
    const fanON = new Fan(body.topic);
    const result = fanON.turnOn();
    return { message: result };
  } catch (error) {
    set.status = 409;
    return error;
  }
}
export function doorControlService({ set, body }: any) {
  try {
    set.status = 200;
    const doorON = new Door(body.topic);
    const result = doorON.turnOn();
    return { message: result };
  } catch (error) {
    set.status = 409;
    return error;
  }
}
export function ledOffControlService({ set, body }: any) {
  try {
    set.status = 200;
    const ledOff = new Light(body.topic);
    const result = ledOff.turnOff();
    return { message: result };
  } catch (error) {
    set.status = 409;
    return error;
  }
}
export function fanOffControlService({ set, body }: any) {
  try {
    set.status = 200;
    const fanOff = new Fan(body.topic);
    const result = fanOff.turnOff();
    return { message: result };
  } catch (error) {
    set.status = 409;
    return error;
  }
}
export function doorOffControlService({ set, body }: any) {
  try {
    set.status = 200;
    const doorOff = new Door(body.topic);
    const result = doorOff.turnOff();
    return { message: result };
  } catch (error) {
    set.status = 409;
    return error;
  }
}
