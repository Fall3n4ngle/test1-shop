import { SortItem, SortProvider } from "@/shared/components";
import { Device, SortOrder } from "@/shared/types";
import { useCallback } from "react";
import DeviceDialog from "./DeviceDialog";
import {
  selectSort,
  setSortKey,
  useAppDispatch,
  useAppSelector,
} from "@/store";

type Props = {
  devices: Device[];
};

const DevicesTable = ({ devices }: Props) => {
  const sort = useAppSelector(selectSort);
  const dispatch = useAppDispatch();

  const handleValueChange = useCallback(
    ({ sortKey, sortOrder }: { sortKey: string; sortOrder: SortOrder }) => {
      dispatch(setSortKey({ sortKey: sortKey as keyof Device, sortOrder }));
    },
    [dispatch],
  );

  return (
    <table className="w-full table-fixed">
      <thead className="rounded-[4px] border-b-[1rem] border-background-secondary bg-background">
        <tr>
          <SortProvider value={sort} onValueChange={handleValueChange}>
            <th className="px-8 py-2">
              <SortItem value="title">Product</SortItem>
            </th>
            <th className="px-8 py-2">
              <SortItem value="copayment">
                <span className="hidden min-[1500px]:inline">Employee</span>{" "}
                Copayment
              </SortItem>
            </th>
            <th className="px-8 py-2" colSpan={2}>
              <SortItem value="subscriptionPrice">
                Subscription{" "}
                <span className="hidden min-[1500px]:inline">Price</span>
              </SortItem>
            </th>
          </SortProvider>
        </tr>
      </thead>
      <tbody className="rounded-[4px] bg-background shadow-none">
        {devices.map((device) => (
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
