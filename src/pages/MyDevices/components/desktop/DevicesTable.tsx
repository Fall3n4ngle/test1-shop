import { SortProvider, SortItem } from "@/shared/components";
import { formatDate } from "@/shared/utils";
import { selectDevices, useAppSelector } from "@/store";
import { getStatusColor } from "../../utils/getStatusColor";
import { useCallback, useState } from "react";
import { Sort, SortOrder } from "@/shared/types";
import { OrderedDevice } from "@/store/slices/orderedDevices";
import { useSortedObjects } from "@/shared/hooks";
import NoDevices from "./NoDevices";

const DevicesTable = () => {
  const devices = useAppSelector(selectDevices);
  const [sort, setSort] = useState<Sort<OrderedDevice>>({
    sortKey: "title",
    sortOrder: "asc",
  });

  const sortedDevices = useSortedObjects({
    devices,
    sort,
  });

  const handleValueChange = useCallback(
    ({ sortKey, sortOrder }: { sortKey: string; sortOrder: SortOrder }) => {
      setSort({ sortKey: sortKey as keyof OrderedDevice, sortOrder });
    },
    [],
  );

  if (devices.length === 0) {
    return (
      <div className="pt-[1.25rem]">
        <NoDevices />
      </div>
    );
  }

  return (
    <table className="w-full table-fixed" id="my-devices">
      <thead className="border-b-[1rem] border-background-secondary bg-background">
        <tr>
          <SortProvider value={sort} onValueChange={handleValueChange}>
            <th className="px-8 py-2">
              <SortItem value="title">Device</SortItem>
            </th>
            <th className="px-8 py-2">
              <SortItem value="orderedAt" className="justify-center">
                Order <span className="hidden xl:inline">Date</span>
              </SortItem>
            </th>
            <th className="px-8 py-2">
              <SortItem value="deliveryDate" className="justify-center">
                Delivery <span className="hidden xl:inline">Date</span>
              </SortItem>
            </th>
            <th className="px-8 py-2">
              <SortItem value="status" className="justify-center">
                Status
              </SortItem>
            </th>
          </SortProvider>
        </tr>
      </thead>
      <tbody className="rounded-[4px] bg-background shadow-shadow-1">
        {sortedDevices.map((device) => {
          const { backgorundColor, textColor } = getStatusColor(device.status);

          return (
            <tr key={device.id} className="border-b border-[#d9d9d9]">
              <td className="flex items-center gap-6 px-8 py-4">
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
              <td className="px-8">
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
