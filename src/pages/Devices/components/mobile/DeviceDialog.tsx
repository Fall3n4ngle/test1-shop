import { Dialog, DialogContent, DialogTrigger } from "@/shared/components/ui";
import DeviceCard from "./DeviceCard";
import { Device } from "@/shared/types/Device";
import { DeviceDialogContent } from "../shared";

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
