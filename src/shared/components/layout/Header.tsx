import notificationIcon from "@/assets/notification.svg";
import settingsIcon from "@/assets/settings.svg";
import avatarImage from "@/assets/avatar.png";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 hidden h-20 w-full bg-background-secondary px-20 py-4 lg:block">
      <div className="flex items-center justify-end gap-6">
        <img src={notificationIcon} alt="Notification" width={28} height={28} />
        <img src={settingsIcon} alt="Settings" width={28} height={28} />
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
