import { LogoutIcon } from "@/icons";

const LogoutButton = () => {
  return (
    <button className="flex w-full items-end gap-4 px-[1.125rem] py-3 text-[1.125rem] font-semibold text-muted-foreground">
      <LogoutIcon />
      <span>Log out</span>
    </button>
  );
};

export default LogoutButton;
