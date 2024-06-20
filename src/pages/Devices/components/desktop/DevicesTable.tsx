import { SortItem } from "@/shared/components/sortable";
import { SortOrder } from "@/shared/types";
import { useCallback } from "react";
import DeviceDialog from "./DeviceDialog";
import {
  useAppDispatch,
  useAppSelector,
  Device,
  selectSortedFilteredDevices,
  setSortD,
} from "@/store";
import { devicesTableColumns } from "./const";

const DevicesTable = () => {
  const sortedAndFilteredDevices = useAppSelector(selectSortedFilteredDevices);
  const sort = useAppSelector((state) => state.devices.sort);
  const dispatch = useAppDispatch();

  const handleValueChange = useCallback(
    (sortKey: string, sortOrder: SortOrder) => {
      dispatch(setSortD({ sortKey: sortKey as keyof Device, sortOrder }));
    },
    [dispatch],
  );

  return (
    <table className="w-full table-fixed">
      <thead className="rounded-[4px] border-b-[1rem] border-background-secondary bg-background">
        <tr>
          {devicesTableColumns.map(({ key, label }, index) => (
            <th className="px-8 py-2" key={key} colSpan={index === 2 ? 2 : 1}>
              <SortItem
                isActive={sort.sortKey === key}
                sortKey={key}
                order={sort.sortOrder}
                onValueChange={handleValueChange}
              >
                {label}
              </SortItem>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="rounded-[4px] bg-background shadow-none">
        {sortedAndFilteredDevices.map((device) => (
          <tr key={device.id} className="border-b border-[#d9d9d9]">
            <td className="flex items-center gap-6 px-8 py-4">
              <img
                src={device.image}
                alt={device.title}
                width={40}
                height={56}
              />
              <h3 className="text-[0.875rem] font-semibold xl:text-[1rem]">
                {device.title}
              </h3>
            </td>
            <td className="px-8 text-center min-[1150px]:text-left">
              {device.copayment} €
            </td>
            <td className="px-8 text-center min-[1150px]:text-left">
              {device.subscriptionPrice} €
            </td>
            <td className="px-8">
              <DeviceDialog {...device} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DevicesTable;
