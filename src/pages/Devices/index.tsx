import { Link } from "react-router-dom";
import { DevicesList } from "./components";
import { Button } from "@/shared/components";
import { ArrowLeftIcon } from "@/icons";

const DevicePage = () => {
  return (
    <div>
      <div className="mb-3 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-center">
        <Link to="/">
          <Button variant="icon" size="icon" aria-label="back">
            <ArrowLeftIcon />
          </Button>
        </Link>
        <h1 className="heading-1 leading-[1.31]">Select a Device</h1>
      </div>
      <DevicesList />
    </div>
  );
};

export default DevicePage;
