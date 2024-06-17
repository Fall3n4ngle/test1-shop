import { useMediaQuery } from "@/shared/hooks";
import { DevicesListMobile } from "./mobile";
import { DevicesTable } from "./desktop";

const DevicesList = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) {
    return <DevicesTable />;
  }

  return <DevicesListMobile />;
};

export default DevicesList;
