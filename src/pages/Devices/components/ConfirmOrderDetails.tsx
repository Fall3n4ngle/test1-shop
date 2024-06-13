import { Device } from "@/shared/types/Device";
import ConfirmOrderButton from "./ConfirmOrderButton";
import { DialogClose } from "@/shared/components/ui";
import closeIcon from "@/assets/close.svg";
import arrowLeftIcon from "@/assets/arrow-left.svg";
// import { useSearchParams } from "react-router-dom";

type Props = Pick<
  Device,
  "title" | "copayment" | "subsciptionPrice" | "id" | "image"
>;

const ConfirmOrderDetails = ({
  title,
  copayment,
  subsciptionPrice,
  ...rest
}: Props) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  // const handleClick = () => {
  //   searchParams.delete("deviceDialog");
  //   setSearchParams(searchParams);
  // };

  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <DialogClose className="flex h-8 w-8 items-center justify-center rounded-[4px] shadow-shadow-1">
          <img src={arrowLeftIcon} alt="back" />
        </DialogClose>
        <h2 className="heading-2 text-center">Order confirmation</h2>
        <DialogClose
        // onClick={handleClick}
        >
          <img src={closeIcon} alt="close" />
        </DialogClose>
      </div>
      <h3 className="heading-3 mb-4">Order summary</h3>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[0.75rem] font-semibold leading-[1.4]">Product</p>
        <p>
          <strong>1x</strong> {title}
        </p>
      </div>
      <div className="mb-2.5 flex items-center justify-between">
        <p className="text-[0.75rem] font-semibold leading-[1.4]">
          Employee Copayment
        </p>
        <p className="font-bold leading-[1.33] text-primary">{copayment} €</p>
      </div>
      <p className="mb-4 text-right font-semibold leading-[1.36] text-muted-foreground">
        This amount will be deducted from your payroll monthly or your company's
        release policy will apply.
      </p>
      <div className="mb-[2.125rem] flex items-center justify-between">
        <p className="text-[0.75rem] font-semibold leading-[1.4]">
          Subscription Price
        </p>
        <p className="font-bold leading-[1.33] text-primary">
          {subsciptionPrice} €
        </p>
      </div>
      <h3 className="heading-3 mb-2">Delivery Address</h3>
      <p className="mb-14 text-[0.75rem] leading-[1.5]">
        Munich, House No:121, 2nd Floor, Sector 18
      </p>
      <ConfirmOrderButton
        {...rest}
        title={title}
        subsciptionPrice={subsciptionPrice}
      />
    </div>
  );
};

export default ConfirmOrderDetails;
