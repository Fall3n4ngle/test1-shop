import { ArrowRightIcon } from "@/icons";
import { Device } from "@/store";

type Props = Omit<Device, "description" | "id">;

const DeviceCard = ({
  title,
  image,
  subscriptionPrice: subsciptionPrice,
  copayment,
}: Props) => {
  return (
    <article className="flex items-center gap-4 rounded-[4px] bg-background py-4 pl-6 pr-4 shadow-shadow-1">
      <div className="relative basis-[14%] self-start overflow-hidden pt-[21.6%]">
        <img
          src={image}
          alt={title}
          className="absolute left-0 top-0 h-full w-full object-contain"
        />
      </div>
      <div className="flex grow flex-col items-start">
        <h4 className="mb-1 text-[12px] font-semibold leading-[1.36]">
          {title}
        </h4>
        <p className="mb-0.5 text-[12px] font-semibold leading-[1.36] text-primary">
          {subsciptionPrice} €
        </p>
        <p className="mb-1 text-[10px] leading-[1.362]">Subscription Price</p>
        <p className="mb-0.5 text-[12px] font-semibold leading-[1.36] text-primary">
          {copayment} €
        </p>
        <p className="text-[10px] leading-[1.362]">Copayment</p>
      </div>
      <div className="text-muted-foreground">
        <ArrowRightIcon />
      </div>
    </article>
  );
};

export default DeviceCard;
