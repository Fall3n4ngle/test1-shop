import { useMediaQuery } from "@/shared/hooks";
import { DevicesListMobile } from "./mobile";
import { DevicesListDesktop } from "./desktop";

const DevicesList = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) {
    return <DevicesListDesktop />;
  }

  return <DevicesListMobile />;
};

export default DevicesList;
