import { DeviceEnum } from "../enums/device.enum";

export enum BackgroundObjectType {
  Cloud = "cloud",
  Star = "star",
}

export interface BackgroundObject {
  type: BackgroundObjectType;
  device: DeviceEnum;
  location: number;
  speed: number;
  isReverse: boolean;
}
