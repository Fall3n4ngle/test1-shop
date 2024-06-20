import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/components";
import { DeviceDialogContent } from "../shared";
import { Device } from "@/store";

const DeviceDialog = (props: Device) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="h-10 w-20 text-[0.875rem] min-[1250px]:w-28 min-[1250px]:text-[1rem]">
          Order
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DeviceDialogContent {...props} />
      </DialogContent>
    </Dialog>
  );
};

export default DeviceDialog;
