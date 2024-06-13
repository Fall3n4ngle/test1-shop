import { navigationsItems } from "@/shared/const";
import { cn } from "@/shared/utils";
import { NavLink } from "react-router-dom";

const SidebarNavigation = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        {navigationsItems.map(({ label, href, Icon }) => (
          <li key={href}>
            <NavLink
              to={href}
              className={({ isActive }) =>
                cn(
                  "flex items-end gap-4 px-[1.125rem] py-3 text-[1.125rem] font-semibold text-muted-foreground",
                  isActive && "bg-primary text-white",
                )
              }
            >
              <Icon size={32} />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
