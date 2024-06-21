import { TriangleDownIcon, TriangleUpIcon } from "@/icons";
import { SortOrder } from "@/shared/types";

type Props = {
  isActive: boolean;
  order: SortOrder;
};

const SortIndicator = ({ isActive, order }: Props) => {
  if (isActive && order === "asc") {
    return (
      <div className="text-primary">
        <TriangleUpIcon />
      </div>
    );
  }

  if (isActive && order === "desc") {
    return (
      <div className="text-primary">
        <TriangleDownIcon />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[1px]">
      <div>
        <TriangleUpIcon />
      </div>
      <div>
        <TriangleDownIcon />
      </div>
    </div>
  );
};

export default SortIndicator;
