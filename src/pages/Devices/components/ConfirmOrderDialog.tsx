import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/components/ui";
import { Device } from "@/shared/types/Device";
import ConfirmOrderDetails from "./ConfirmOrderDetails";

type Props = Omit<Device, "description">;

const ConfirmOrderDialog = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Order device</Button>
      </DialogTrigger>
      <DialogContent>
        <ConfirmOrderDetails {...props} />
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmOrderDialog;
