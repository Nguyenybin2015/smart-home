import * as controlDeviceService from "../services/controlDevice.service";
export function ledControl({set, body}: any) {
  try {
    set.status = 200;
    return controlDeviceService.ledControlService({set, body});
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export function fanControl({set, body}: any) {
  try {
    set.status = 200;
    return controlDeviceService.fanControlService({set, body});
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export function doorControl({set, body}: any) {
  try {
    set.status = 200;
    return controlDeviceService.doorControlService({set, body});
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export function ledOffControl({set, body}: any) {
  try {
    set.status = 200;
    return controlDeviceService.ledOffControlService({set, body});
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export function fanOffControl({set, body}: any) {
  try {
    set.status = 200;
    return controlDeviceService.fanOffControlService({set, body});
  } catch (error) {
    set.status = 500;
    return error;
  }
}
export function doorOffControl({set, body}: any) {
  try {
    set.status = 200;
    return controlDeviceService.doorOffControlService({set, body});
  } catch (error) {
    set.status = 500;
    return error;
  }
}
