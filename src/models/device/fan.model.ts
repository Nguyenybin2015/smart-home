import { Device } from "./device.model";

export class Fan extends Device {
  private _speed!: number | 0;
  constructor(name: string) {
    super(name);

  }
  public get speed(): number | 0 {
    return this._speed;
  }
  public set speed(value: number | 0) {
    this._speed = value;
  }
}
