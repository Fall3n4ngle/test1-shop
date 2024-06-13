import logoutIcon from "@/assets/logout.svg";

const LogoutButton = () => {
  return (
    <button className="flex w-full items-end gap-4 px-[1.125rem] py-3 text-[1.125rem] font-semibold text-muted-foreground">
      <img src={logoutIcon} alt="logout" width={32} height={32} />
      <span>Log out</span>
    </button>
  );
};

export default LogoutButton;
