import dotsIcon from "@/assets/dots.svg";
import { Button } from "@/shared/components";
import { Link } from "react-router-dom";
import { Devices } from "./components";

const HomePage = () => {
  return (
    <>
      <div className="mb-[17px] text-right lg:hidden">
        <button aria-label="Configurations">
          <img src={dotsIcon} alt="Configurations" />
        </button>
      </div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="heading-1 leading-[1.36]">Hello!</h1>
        <Link to="/device" className="hidden lg:block">
          <Button variant="third" className="h-10 w-[7.5rem]">
            New Order
          </Button>
        </Link>
      </div>
      <div className="mb-10">
        <Devices />
      </div>
      <Link to="/device" className="lg:hidden">
        <Button className="w-full bg-transparent" size="secondary">
          New Order
        </Button>
      </Link>
    </>
  );
};

export default HomePage;
