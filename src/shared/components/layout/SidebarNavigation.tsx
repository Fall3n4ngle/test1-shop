import { navigationsItems } from "@/shared/const";
import { cn } from "@/shared/utils";
import { NavLink } from "react-router-dom";

const SidebarNavigation = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        {navigationsItems.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-end gap-4 px-[1.125rem] py-3 text-[1.125rem] font-semibold text-muted-foreground",
                  isActive && "bg-primary text-white",
                )
              }
            >
              <img src={item.icon} alt={item.label} width={32} height={32} />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
