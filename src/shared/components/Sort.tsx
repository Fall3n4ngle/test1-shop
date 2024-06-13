import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components";
import { SortValue } from "@/shared/types";
import { sortOptions } from "@/shared/const";

type Props = {
  value: SortValue;
  onValueChange: (value: SortValue) => void;
};

const Sort = ({ value, onValueChange }: Props) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[151px] shadow-shadow-1">
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        ref={(ref) =>
          ref?.addEventListener("touchend", (e) => e.preventDefault())
        }
      >
        {sortOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Sort;
