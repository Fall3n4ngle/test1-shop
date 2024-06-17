import { useAppSelector } from "@/store";
import { selectFirstTwoDevices } from "@/store/slices/orderedDevices";
import InfoCard from "./InfoCard";
import { Button } from "@/shared/components";
import { Link } from "react-router-dom";
import DeviceCard from "./DeviceCard";

const DevicesDesktop = () => {
  const devices = useAppSelector(selectFirstTwoDevices);

  if (devices.length < 1) {
    return (
      <div className="bg-background p-6 shadow-shadow-1">
        <h3 className="mb-6 text-[1.25rem] font-semibold leading-[1.35]">
          Your Devices
        </h3>
        <div className="mb-[75px]">
          <InfoCard
            title="No Devices"
            description="Order a device first and it will show up here."
          />
        </div>
        <div className="text-right">
          <Link to="/devices">
            <Button className="h-[39px]">Order device</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background p-6 shadow-shadow-1">
      <h3 className="mb-6 text-[1.25rem] font-semibold leading-[1.35]">
        Your Devices
      </h3>
      <div className="mb-6 flex flex-col gap-3.5">
        {devices.map((device) => (
          <DeviceCard {...device} key={device.id} />
        ))}
      </div>
      <div className="flex items-center justify-end gap-4">
        <Link to="/devices/my">
          <Button variant="secondary" className="h-10">
            View all
          </Button>
        </Link>
        <Link to="/devices">
          <Button className="h-10">Order device</Button>
        </Link>
      </div>
    </div>
  );
};

export default DevicesDesktop;
