import { Button } from "@/shared/components";
import { Link } from "react-router-dom";
import { DevicesList } from "./components";
import arrowLeftIcon from "@/assets/arrow-left.svg";

const MyDevicesPage = () => {
  return (
    <div className="pt-4">
      <Link to="/">
        <Button variant="icon" size="icon" className="mb-6">
          <img src={arrowLeftIcon} alt="back" />
        </Button>
      </Link>
      <h1 className="heading-1 mb-8 leading-[1.36]">My Devices</h1>
      <div className="mb-12">
        <DevicesList />
      </div>
      <Link to="/device">
        <Button className="w-full">Order new device</Button>
      </Link>
    </div>
  );
};

export default MyDevicesPage;
