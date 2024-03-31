import * as controlDeviceService from "../services/controlDevice.service";
export function ledControl({set}: any) {
  try {
    set.status = 200;
    controlDeviceService.ledControlService({set});
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export function fanControl({set}: any) {
  try {
    set.status = 200;
    return "fan control";
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export function doorControl({set}: any) {
  try {
    set.status = 200;
    return "doorControl";
  } catch (error) {
    set.status = 500;
    return error;
  }
}
