import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components";
import { sortOptions } from "@/shared/const";

type Props = {
  value: string;
  onValueChange: (value: string) => void;
};

const SelectSort = ({ value, onValueChange }: Props) => {
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

export default SelectSort;
