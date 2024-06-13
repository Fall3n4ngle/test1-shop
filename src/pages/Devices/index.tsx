import { Link } from "react-router-dom";
import { DevicesList } from "./components";
import arrowLeftIcon from "@/assets/arrow-left.svg";
import { Button } from "@/shared/components";

const DevicePage = () => {
  return (
    <div>
      <Link to="/">
        <Button variant="icon" size="icon" className="mb-4">
          <img src={arrowLeftIcon} alt="back" />
        </Button>
      </Link>
      <h1 className="heading-1 mb-3 leading-[1.31]">Select a Device</h1>
      <DevicesList />
    </div>
  );
};

export default DevicePage;
