import { useState, useEffect } from "react";

export enum DeviceType {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  LAPTOP = "LAPTOP",
  UNKNOWN = "UNKNOWN",
}

export function useDeviceSize(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.UNKNOWN);

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setDeviceType(DeviceType.MOBILE);
      } else if (window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches) {
        setDeviceType(DeviceType.TABLET);
      } else if (window.matchMedia("(min-width: 1025px)").matches) {
        setDeviceType(DeviceType.LAPTOP);
      } else {
        setDeviceType(DeviceType.UNKNOWN);
      }
    };

    // Run initially
    updateDeviceType();

    // Add event listeners
    const resizeListener = () => updateDeviceType();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return deviceType;
}
