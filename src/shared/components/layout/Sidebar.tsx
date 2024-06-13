import { Link } from "react-router-dom";
import SidebarNavigation from "./SidebarNavigation";
import logoIcon from "@/assets/logo.svg";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-20 hidden h-screen w-[22.5rem] bg-background px-[1.375rem] py-10 lg:block">
      <div className="flex h-full flex-col gap-[31px]">
        <Link to="/">
          <img src={logoIcon} alt="logo" width={196} height={34} />
        </Link>
        <div className="grow">
          <SidebarNavigation />
        </div>
        <LogoutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
