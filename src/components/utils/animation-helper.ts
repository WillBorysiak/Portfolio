import { DeviceEnum } from "../../enums/device.enum";
import {
  BackgroundObjectType,
  BackgroundObject,
} from "../../interfaces/background-object.interface";

export class AnimationHelper {
  static generateBackgroundObjects = (
    device: DeviceEnum,
    objectType: BackgroundObjectType,
  ): BackgroundObject[] => {
    const backgroundObjects: BackgroundObject[] = [];

    const minNumber = objectType === BackgroundObjectType.Cloud ? 3 : 10;
    const maxNumber = objectType === BackgroundObjectType.Cloud ? 5 : 15;
    const numberOfObjects =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    for (let i = 0; i < numberOfObjects; i++) {
      const minHeight = 0.1 * window.innerHeight;
      const maxHeight = 0.9 * window.innerHeight;
      const location: number = Math.random() * maxHeight + minHeight;

      const speed: number = Math.random() * (60 - 30) + 30; // 20 - 60 seconds

      const isReverse: boolean = Math.random() > 0.5;

      const backgroundObject: BackgroundObject = {
        type: objectType,
        device,
        location,
        speed,
        isReverse,
      };

      backgroundObjects.push(backgroundObject);
    }

    return backgroundObjects;
  };

  static getObjectKeyframe = (
    type: BackgroundObjectType,
    deviceType: DeviceEnum,
    isReverse: boolean,
  ): string => {
    switch (type) {
      case BackgroundObjectType.Cloud:
        return AnimationHelper.getCloudKeyframe(deviceType, isReverse);
      case BackgroundObjectType.Star:
        return AnimationHelper.getStarKeyframe(isReverse);
      default:
        return "";
    }
  };

  static getCloudKeyframe = (
    deviceType: DeviceEnum,
    isReverse: boolean,
  ): string => {
    if (isReverse) {
      switch (deviceType) {
        case DeviceEnum.Mobile:
          return "cloud-mobile-reverse-animation";
        case DeviceEnum.Tablet:
          return "cloud-tablet-reverse-animation";
        case DeviceEnum.Desktop:
          return "cloud-desktop-reverse-animation";
        default:
          return "";
      }
    } else {
      switch (deviceType) {
        case DeviceEnum.Mobile:
          return "cloud-mobile-animation";
        case DeviceEnum.Tablet:
          return "cloud-tablet-animation";
        case DeviceEnum.Desktop:
          return "cloud-desktop-animation";
        default:
          return "";
      }
    }
  };

  static getStarKeyframe = (isReverse: boolean): string => {
    if (isReverse) {
      return "star-reverse-animation";
    } else {
      return "star-animation";
    }
  };
}
