import { createContext, useContext, useEffect, useState } from "react";
import { TriangleDownIcon, TriangleUpIcon } from "@/icons";
import { cn } from "@/shared/utils";
import { SortOrder } from "@/shared/types";

type ContextValue = {
  sortKey: string;
  setSortKey: (sortKey: string) => void;
  sortOrder: SortOrder;
  setSortOrder: (sortOrder: SortOrder) => void;
};

const SortContext = createContext<ContextValue | null>(null);

type Value = {
  sortKey: string;
  sortOrder: SortOrder;
};

type SortProviderProps = {
  children: React.ReactNode;
  value: Value;
  onValueChange: (value: Value) => void;
};

const SortProvider = ({
  children,
  value,
  onValueChange,
}: SortProviderProps) => {
  const [sortKey, setSortKey] = useState(value.sortKey);
  const [sortOrder, setSortOrder] = useState<SortOrder>(value.sortOrder);

  useEffect(() => {
    setSortKey(value.sortKey);
    setSortOrder(value.sortOrder);
  }, [value]);

  useEffect(() => {
    onValueChange({ sortKey, sortOrder });
  }, [sortKey, sortOrder, onValueChange]);

  return (
    <SortContext.Provider
      value={{ sortKey, setSortKey, sortOrder, setSortOrder }}
    >
      {children}
    </SortContext.Provider>
  );
};

const useSortProvider = () => {
  const context = useContext(SortContext);

  if (!context) {
    throw new Error(
      "useSortProvider must be used within a DesktopSortProvider",
    );
  }

  return context;
};

type SortItemProps = {
  children: React.ReactNode;
  value: string;
  className?: string;
};

const SortItem = ({ children, value, className }: SortItemProps) => {
  const { sortKey, setSortKey, sortOrder, setSortOrder } = useSortProvider();

  const handleClick = () => {
    if (sortKey === value) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(value);
      setSortOrder("asc");
    }
  };

  let indicators;
  if (sortKey === value && sortOrder === "asc") {
    indicators = (
      <div className="text-primary">
        <TriangleUpIcon />
      </div>
    );
  } else if (sortKey === value && sortOrder === "desc") {
    indicators = (
      <div className="text-primary">
        <TriangleDownIcon />
      </div>
    );
  } else {
    indicators = (
      <div className="flex flex-col gap-[1px]">
        <div>
          <TriangleUpIcon />
        </div>
        <div>
          <TriangleDownIcon />
        </div>
      </div>
    );
  }

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
      {indicators}
    </div>
  );
};

export { SortProvider, SortItem };
