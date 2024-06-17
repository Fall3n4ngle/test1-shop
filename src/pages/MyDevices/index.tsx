import { Button } from "@/shared/components";
import { Link } from "react-router-dom";
import { DevicesList } from "./components";
import { ArrowLeftIcon } from "@/icons";

const MyDevicesPage = () => {
  return (
    <div className="pt-4">
      <div className="mb-8 flex flex-col gap-6 lg:mb-5 lg:flex-row lg:items-center lg:justify-between">
        <Link to="/" className="lg:hidden">
          <Button variant="icon" size="icon" className="mb-6" aria-label="Back">
            <ArrowLeftIcon />
          </Button>
        </Link>
        <h1 className="heading-1 leading-[1.36]">My Devices</h1>
        <Link to="/devices" className="hidden lg:block">
          <Button className="h-10">Order new device</Button>
        </Link>
      </div>
      <div className="mb-12">
        <DevicesList />
      </div>
      <Link to="/devices" className="lg:hidden">
        <Button className="w-full">Order new device</Button>
      </Link>
    </div>
  );
};

export default MyDevicesPage;
