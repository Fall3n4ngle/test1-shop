import { cn } from "@/shared/utils";
import SortIndicator from "./SortIndicator";
import { SortOrder } from "@/shared/types";

type Props = {
  children: React.ReactNode;
  isActive: boolean;
  sortKey: string;
  onValueChange: (sortKey: string, order: SortOrder) => void;
  className?: string;
  order: SortOrder;
};

const SortItem = ({
  children,
  onValueChange,
  sortKey,
  className,
  order,
  isActive,
}: Props) => {
  const handleClick = () => {
    let newOrder: SortOrder = "asc";
    
    if (isActive) {
      newOrder = order === "asc" ? "desc" : "asc";
    }

    onValueChange(sortKey, newOrder);
  };

  return (
    <div
      role="button"
      onClick={handleClick}
      className={cn(
        "flex items-center gap-2 text-[1rem] font-semibold leading-[1.31]",
        className,
      )}
    >
      <span>{children}</span>
      <SortIndicator isActive={isActive} order={order} />
    </div>
  );
};

export default SortItem;
