import { useMediaQuery } from "@/shared/hooks";
import DevicesDesktop from "./DevicesDesktop";
import DevicesMobile from "./DevicesMobile";

const Devices = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) {
    return <DevicesDesktop />;
  }

  return <DevicesMobile />;
};

export default Devices;
