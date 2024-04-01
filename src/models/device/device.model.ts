import { IDevice } from "../Interface/IDevice";
import { MQTT } from "../../config/mqtt";
export class Device implements IDevice {
  private _name: string;
  private _isOn: boolean = false;
  private mqtt;
  constructor(name: string) {
    this._name = name;
    this.mqtt = new MQTT("mqtt://broker.hivemq.com", this._name);
  }
  public get isOn(): boolean {
    return this._isOn;
  }
  public set isOn(value: boolean) {
    this._isOn = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public turnOn(): string {
    this._isOn = true;
    this.mqtt.pub("on");
    const message = `${this._name} đã được bật.`;
    console.log(message);
    return message;
  }

  public turnOff(): string {
    this._isOn = false;
    this.mqtt.pub("off");
    const message = `${this._name} đã được tắt.`;
    console.log(message);
    return message;
  }
  public checkState(): boolean {
    this.mqtt.sub();
    if (this.mqtt.message() === "on") {
      console.log(`${this._name} đang bật.`);
      return true;
    } else {
      console.log(`${this._name} đang tắt.`);
      return false;
    }
  }
}
