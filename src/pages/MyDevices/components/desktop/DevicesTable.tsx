import { SortItem } from "@/shared/components/sortable";
import { SortOrder } from "@/shared/types";
import { cn, formatDate } from "@/shared/utils";
import {
  selectSortedOrderedDevices,
  setSortOD,
  OrderedDevice,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { useCallback } from "react";
import { getStatusColor } from "../../utils/getStatusColor";
import NoDevices from "./NoDevices";
import { devicesTableColumns } from "./const";

const DevicesTable = () => {
  const sortedOrderedDevices = useAppSelector(selectSortedOrderedDevices);
  const sort = useAppSelector((state) => state.orderedDevices.sort);
  const dispatch = useAppDispatch();

  const handleValueChange = useCallback(
    (sortKey: string, order: SortOrder) => {
      dispatch(
        setSortOD({
          sortKey: sortKey as keyof OrderedDevice,
          sortOrder: order,
        }),
      );
    },
    [dispatch],
  );

  if (sortedOrderedDevices.length === 0) {
    return (
      <div className="pt-[1.25rem]">
        <NoDevices />
      </div>
    );
  }

  return (
    <table className="w-full table-fixed">
      <thead className="border-b-[1rem] border-background-secondary bg-background">
        <tr>
          {devicesTableColumns.map(({ key, label }, index) => (
            <th className="px-8 py-2" key={key}>
              <SortItem
                isActive={sort.sortKey === key}
                sortKey={key}
                order={sort.sortOrder}
                onValueChange={handleValueChange}
                className={cn(index === 0 && "justify-center")}
              >
                {label}
              </SortItem>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-background shadow-shadow-1">
        {sortedOrderedDevices.map((device) => {
          const { backgorundColor, textColor } = getStatusColor(device.status);

          return (
            <tr key={device.id} className="border-b border-[#d9d9d9]">
              <td className="px-8 py-4">
                <h3 className="text-[0.875rem] font-semibold min-[1497px]:text-[1rem]">
                  {device.title}
                </h3>
              </td>
              <td className="px-8 text-center">
                {formatDate(device.orderedAt, ".")}
              </td>
              <td className="px-8 text-center">
                {formatDate(device.deliveryDate, ".")}
              </td>
              <td className="px-8 text-center">
                <span
                  className="inline-block rounded-2xl px-2.5 py-1 text-[0.75rem] font-semibold xl:text-[1rem]"
                  style={{ backgroundColor: backgorundColor, color: textColor }}
                >
                  {device.status}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DevicesTable;
