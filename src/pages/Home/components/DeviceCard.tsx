import { formatDate } from "@/shared/utils/formatDate";
import { ArrowRightIcon } from "@/icons";
import { OrderedDevice } from "@/store";

type Props = Omit<OrderedDevice, "id">;

const DeviceCard = ({ title, image, orderedAt }: Props) => {
  return (
    <div className="flex min-h-[88px] items-center gap-2 bg-background px-6 py-7 shadow-shadow-1 lg:min-h-[42px] lg:p-0 lg:shadow-none">
      <div className="relative h-8 w-8 lg:h-10 lg:w-10">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="grow">
        <h4 className="font-semibold leading-[1.35] lg:mb-0.5 lg:text-[1rem]">
          {title}
        </h4>
        <p className="leading-[1.33] lg:text-muted-foreground">
          Ordered {formatDate(orderedAt, ".")}
        </p>
      </div>
      <button
        aria-label="View details"
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] bg-[#f5f6f6] lg:hidden"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default DeviceCard;
