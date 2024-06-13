import { NavLink } from "react-router-dom";
import { navigationsItems } from "@/shared/const";
import { cn } from "@/shared/utils";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-background pb-5 pt-2.5 lg:hidden">
      <nav>
        <ul className="flex items-center justify-center gap-10 font-roboto">
          {navigationsItems.map(({ href, label, Icon }) => {
            return (
              <li key={href}>
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    cn(
                      "flex flex-col items-center gap-2 transition-colors",
                      isActive
                        ? "font-bold text-primary"
                        : "font-medium text-muted-foreground",
                    )
                  }
                >
                  <Icon />
                  <span className="text-[10px] leading-[1.17]">{label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavigation;
