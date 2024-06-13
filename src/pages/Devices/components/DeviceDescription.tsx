import { Button, DialogClose } from "@/shared/components/ui";
import { Device } from "@/shared/types/Device";
import closeIcon from "@/assets/close.svg";

type Props = Omit<Device, "id"> & {
  setOrderView: () => void;
};

const DeviceDescription = ({
  description,
  image,
  title,
  subsciptionPrice,
  copayment,
  setOrderView
}: Props) => {
  return (
    <div>
      <div className="mb-[26px] grid grid-cols-3 items-center">
        <h3 className="heading-3 col-start-2 text-center">{title}</h3>
        <DialogClose className="col-start-3 justify-self-end">
          <img src={closeIcon} alt="close" />
        </DialogClose>
      </div>
      <div className="relative mx-auto mb-4 h-[171px] w-[127px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <h3 className="heading-3 mb-2">Description</h3>
      <p className="mb-4 text-[0.75rem] leading-[1.4]">{description}</p>
      <h3 className="heading-3 mb-2">Subsciption price</h3>
      <p className="mb-4 text-[1rem] font-bold leading-none text-primary">
        {subsciptionPrice}€
      </p>
      <h3 className="heading-3 mb-2">Employee Copayment</h3>
      <p className="mb-2 text-[1rem] font-bold leading-none text-primary">
        {copayment}€
      </p>
      <p className="mb-4 text-[0.75rem] leading-[1.33] text-muted-foreground">
        This amount will be deducted from your payroll monthly or your company's
        release policy will apply.
      </p>
      <h3 className="heading-3 mb-4">Delivery Date</h3>
      <p className="mb-4 text-[0.75rem] leading-[1.5]">
        Munich, House No:121, 2nd Floor, Sector 18
      </p>
      <Button className="mb-4 w-full" variant="secondary">
        Change Address
      </Button>
      <Button onClick={setOrderView} className="w-full">
        Order device
      </Button>
    </div>
  );
};

export default DeviceDescription;
