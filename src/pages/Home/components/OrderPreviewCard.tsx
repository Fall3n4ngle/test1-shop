import { OrderedDevice } from "@/store/slices/orderedDevices";
import arrowRightIcon from "@/assets/arrow-right.svg";
import { formatDate } from "@/shared/utils/formatDate";

type Props = Omit<OrderedDevice, "id">;

const OrderPreviewCard = ({ title, image, orderedAt }: Props) => {
  return (
    <div className="flex h-[88px] items-center gap-2 bg-background px-6 py-7 shadow-shadow-1">
      <div className="relative basis-8 overflow-hidden pt-[12.2%]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="grow">
        <h4 className="font-semibold leading-[1.35]">{title}</h4>
        <p className="text-[0.75rem] leading-[1.33]">
          Ordered {formatDate(orderedAt, ".")}
        </p>
      </div>
      <button className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] bg-[#f5f6f6]">
        <img src={arrowRightIcon} alt="Arrow right" />
      </button>
    </div>
  );
};

export default OrderPreviewCard;
