import avatarImage from "@/assets/avatar.png";
import { NotificationIcon, SettingsIcon } from "@/icons";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 hidden h-20 w-full bg-background-secondary px-14 py-4 lg:block xl:px-[4.5rem]">
      <div className="flex items-center justify-end gap-6">
        <NotificationIcon />
        <SettingsIcon />
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <img
            src={avatarImage}
            alt="Avatar"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
