import { SearchFilter } from "../shared";
import DevicesTable from "./DevicesTable";

const DevicesList = () => {
  return (
    <>
      <div className="mb-6">
        <SearchFilter />
      </div>
      <DevicesTable />
    </>
  );
};

export default DevicesList;
