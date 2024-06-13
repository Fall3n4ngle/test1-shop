import { Device } from "@/shared/types/Device";
import ConfirmOrderButton from "./ConfirmOrderButton";
import { Button, DialogClose } from "@/shared/components/ui";
import closeIcon from "@/assets/close.svg";
import arrowLeftIcon from "@/assets/arrow-left.svg";

type Props = Pick<
  Device,
  "title" | "copayment" | "subsciptionPrice" | "id" | "image"
> & {
  setDescriptionView: () => void;
};

const ConfirmOrderDetails = ({
  title,
  copayment,
  subsciptionPrice,
  setDescriptionView,
  ...rest
}: Props) => {
  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <Button onClick={setDescriptionView} variant="icon" size="icon">
          <img src={arrowLeftIcon} alt="back" />
        </Button>
        <h2 className="heading-2 text-center">Order confirmation</h2>
        <DialogClose>
          <img src={closeIcon} alt="close" />
        </DialogClose>
      </div>
      <h3 className="heading-3 mb-4 lg:mb-2">Order summary</h3>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[0.75rem] font-semibold leading-[1.4] lg:leading-[1.35] lg:text-[0.875rem]">
          Product
        </p>
        <p className="lg:font-bold">
          <span className="font-bold">1x</span> {title}
        </p>
      </div>
      <div className="mb-2.5 flex items-center justify-between lg:mb-1.5">
        <p className="text-[0.75rem] font-semibold leading-[1.4] lg:leading-[1.35] lg:text-[0.875rem]">
          Employee Copayment
        </p>
        <p className="font-bold leading-[1.33] text-primary">{copayment} €</p>
      </div>
      <p className="mb-4 text-right font-semibold leading-[1.36] text-muted-foreground lg:mb-6 lg:max-w-[290px] lg:text-left lg:text-[0.81rem] lg:font-normal">
        This amount will be deducted from your payroll monthly or your company's
        release policy will apply.
      </p>
      <div className="mb-[2.125rem] flex items-center justify-between lg:mb-12">
        <p className="text-[0.75rem] font-semibold leading-[1.4] lg:leading-[1.35] lg:text-[0.875rem]">
          Subscription Price
        </p>
        <p className="font-bold leading-[1.33] text-primary">
          {subsciptionPrice} €
        </p>
      </div>
      <div className="mb-14 flex justify-between lg:mb-10">
        <div>
          <h3 className="heading-3 mb-2 lg:mb-4">Delivery Address</h3>
          <p className="text-[0.75rem] leading-[1.5]">
            Munich, House No:121, 2nd Floor, Sector 18
          </p>
        </div>
        <Button
          className="hidden h-9 text-[0.875rem] lg:inline-flex self-end"
          variant="secondary"
        >
          Change address
        </Button>
      </div>
      <DialogClose className="w-full">
        <ConfirmOrderButton
          {...rest}
          title={title}
          subsciptionPrice={subsciptionPrice}
        />
      </DialogClose>
    </div>
  );
};

export default ConfirmOrderDetails;
