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
  setOrderView,
}: Props) => {
  return (
    <div>
      <div className="mb-[26px] lg:mb-8 grid grid-cols-3 items-center lg:grid-cols-1">
        <h3 className="heading-3 col-start-2 text-center lg:order-2 lg:col-start-auto lg:text-left lg:text-[1.375rem]">
          {title}
        </h3>
        <DialogClose className="col-start-3 justify-self-end lg:col-start-auto">
          <img src={closeIcon} alt="close" />
        </DialogClose>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="relative mx-auto h-[171px] w-[127px] overflow-hidden lg:mx-0 lg:h-auto lg:basis-[36%] lg:self-start lg:pt-[46%]">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="lg:basis-[64%] lg:pr-6 lg:pt-1">
          <h3 className="heading-3 mb-2">Description</h3>
          <p className="mb-4 text-[0.75rem] leading-[1.4] lg:mb-8 lg:text-[1rem] lg:leading-[1.375]">
            {description}
          </p>
          <h3 className="heading-3 mb-2">Subsciption price</h3>
          <p className="mb-4 text-[1rem] font-bold leading-none text-primary">
            {subsciptionPrice}€
          </p>
          <h3 className="heading-3 mb-2">Employee Copayment</h3>
          <p className="mb-2 text-[1rem] font-bold leading-none text-primary">
            {copayment}€
          </p>
          <p className="mb-4 text-[0.75rem] leading-[1.33] text-muted-foreground lg:mb-8 lg:text-[0.8rem]">
            This amount will be deducted from your payroll monthly or your
            company's release policy will apply.
          </p>
          <h3 className="heading-3 mb-4">Delivery Date</h3>
          <p className="mb-4 text-[0.75rem] leading-[1.5] lg:mb-12 lg:font-semibold">
            Munich, House No:121, 2nd Floor, Sector 18
          </p>
          <Button className="mb-4 w-full lg:hidden" variant="secondary">
            Change Address
          </Button>
          <div className="text-right">
            <Button onClick={setOrderView} className="w-full lg:w-auto">
              Order device
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDescription;
