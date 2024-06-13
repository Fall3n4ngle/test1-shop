import { Device } from "@/shared/types/Device";

type Props = Omit<Device, "description" | "id">;

const DeviceCard = ({ title, image, subsciptionPrice, copayment }: Props) => {
  return (
    <article className="flex items-center gap-4 rounded-[4px] bg-background py-4 pl-6 pr-4 shadow-shadow-1">
      <div className="relative basis-[44.8px] self-start overflow-hidden pt-[23.6%]">
        <img
          src={image}
          alt={title}
          className="absolute left-0 top-0 h-full w-full object-cover"
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
      <svg
        width="8.81"
        height="16"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.60682 4.64312L1.10987 0.147663C0.912546 -0.0491623 0.59285 -0.0491624 0.395028 0.147663C0.197705 0.344488 0.197705 0.664183 0.395028 0.861008L4.53529 4.99977L0.395526 9.13854C0.198203 9.33536 0.198203 9.65506 0.395526 9.85238C0.592849 10.0492 0.913043 10.0492 1.11037 9.85238L5.60732 5.35696C5.80161 5.16217 5.80161 4.83745 5.60682 4.64312Z"
          fill="#e5e5e5"
        />
      </svg>
    </article>
  );
};

export default DeviceCard;
