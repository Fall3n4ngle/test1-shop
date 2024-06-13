import { formatDate } from "@/shared/utils";
import { OrderedDevice } from "@/store/slices/orderedDevices";
import arrowRightIcon from "@/assets/arrow-right.svg";

type Props = Omit<OrderedDevice, "id">;

const DeviceCard = ({ image, orderedAt, title, quanity }: Props) => {
  return (
    <article className="flex items-center justify-between gap-2 border-b border-[#e5e5e5] pb-2.5">
      <div className="relative basis-8 overflow-hidden pt-[12.2%]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="grow">
        <h5 className="mb-1 font-roboto text-[0.875rem] font-medium leading-[1.14]">
          {quanity} X {title}
        </h5>
        <p className="font-roboto text-[0.75rem] leading-[1.16] text-muted-foreground">
          Ordered {formatDate(orderedAt, "/")}
        </p>
      </div>
      <button className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] bg-background">
        <img src={arrowRightIcon} alt="Arrow right" />
      </button>
    </article>
  );
};

export default DeviceCard;
