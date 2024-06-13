import { Button } from "@/shared/components/ui";
import { useAppDispatch } from "@/store/hooks";
import { OrderedDevice, addOrderedDevice } from "@/store/slices/orderedDevices";

type Props = Omit<OrderedDevice, "orderedAt" | "quanity">;

const ConfirmOrderButton = (props: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addOrderedDevice({ ...props, orderedAt: new Date() }));
  };

  return (
    <Button onClick={handleClick} className="w-full">
      Confirm Order
    </Button>
  );
};

export default ConfirmOrderButton;
