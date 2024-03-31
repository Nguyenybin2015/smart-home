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

  public turnOn(): void {
    this._isOn = true;
    this.mqtt.pub("on");
    console.log(`${this._name} đã được bật.`);
  }

  public turnOff(): void {
    this._isOn = false;
    this.mqtt.pub("off");
    console.log(`${this._name} đã được tắt.`);
  }
}
