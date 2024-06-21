import { Dialog, DialogContent, DialogTrigger } from "@/shared/components/ui";
import DeviceCard from "./DeviceCard";
import { DeviceDialogContent } from "../shared";
import { Device } from "@/store/slices/devices/types";

const DeviceDialog = ({ description, id, ...device }: Device) => {
  return (
    <Dialog>
      <DialogTrigger>
        <DeviceCard {...device} />
      </DialogTrigger>
      <DialogContent>
        <DeviceDialogContent description={description} id={id} {...device} />
      </DialogContent>
    </Dialog>
  );
};

export default DeviceDialog;
