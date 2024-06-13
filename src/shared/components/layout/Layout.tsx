import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";
import SidebarNavigation from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex">
      <SidebarNavigation />
      <div className="min-h-screen w-full px-8 pb-24 pt-6 lg:pb-6 lg:pl-[27rem] lg:pr-[4.5rem] lg:pt-[5.5rem]">
        <Header />
        <Outlet />
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Layout;