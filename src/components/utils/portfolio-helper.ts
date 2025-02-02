import { DeviceEnum } from "../../enums/device.enum";

export class PortfolioHelper {
  static getDevice = (screenWidth: number): DeviceEnum => {
    if (screenWidth < 640) {
      return DeviceEnum.Mobile;
    }

    if (screenWidth > 641 && screenWidth < 1024) {
      return DeviceEnum.Tablet;
    }

    if (screenWidth > 1025) {
      return DeviceEnum.Desktop;
    }

    return DeviceEnum.Desktop;
  };

  static generateUrl = (url: string): string => "https:" + url;
}
