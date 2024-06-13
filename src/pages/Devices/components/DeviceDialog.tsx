import { Dialog, DialogContent, DialogTrigger } from "@/shared/components/ui";
import DeviceCard from "./DeviceCard";
import { Device } from "@/shared/types/Device";
import DeviceDescription from "./DeviceDescription";
// import { useSearchParams } from "react-router-dom";

const DeviceDialog = ({ description, id, ...device }: Device) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  // const handleOpenChange = (open: boolean) => {
  //   if (open) {
  //     searchParams.set("deviceDialog", "true");
  //     setSearchParams(searchParams);
  //   } else {
  //     searchParams.delete("deviceDialog");
  //     setSearchParams(searchParams);
  //   }
  // };

  return (
    <Dialog
    // open={searchParams.get("deviceDialog") === "true"}
    // onOpenChange={handleOpenChange}
    >
      <DialogTrigger>
        <DeviceCard {...device} />
      </DialogTrigger>
      <DialogContent>
        <DeviceDescription description={description} id={id} {...device} />
      </DialogContent>
    </Dialog>
  );
};

export default DeviceDialog;
