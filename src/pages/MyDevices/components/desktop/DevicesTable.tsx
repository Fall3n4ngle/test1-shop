import { SortItem, SortProvider } from "@/shared/components";
import { SortOrder } from "@/shared/types";
import { formatDate } from "@/shared/utils";
import {
  selectSort,
  setSortKey,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { selectSortedOrderedDevices } from "@/store/slices/orderedDevices";
import { useCallback } from "react";
import { getStatusColor } from "../../utils/getStatusColor";
import NoDevices from "./NoDevices";

const DevicesTable = () => {
  const sortedOrderedDevices = useAppSelector(selectSortedOrderedDevices);
  const sort = useAppSelector(selectSort);
  const dispatch = useAppDispatch();

  const handleValueChange = useCallback(
    ({ sortKey, sortOrder }: { sortKey: string; sortOrder: SortOrder }) => {
      dispatch(setSortKey({ sortKey, sortOrder }));
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
