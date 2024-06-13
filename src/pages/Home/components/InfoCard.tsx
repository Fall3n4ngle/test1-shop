import arrowRightIcon from "@/assets/arrow-right.svg";

type Props = {
  title: string;
  description: string;
};

const InfoCard = ({ title, description }: Props) => {
  return (
    <article className="flex items-center justify-between gap-12 bg-background py-3 pl-4 pr-6 shadow-shadow-1">
      <div>
        <h4 className="mb-1.5 font-semibold leading-[1.35] lg:text-[1.25rem]">
          {title}
        </h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <button className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] bg-background-secondary">
        <img src={arrowRightIcon} alt="Arrow right" />
      </button>
    </article>
  );
};

export default InfoCard;
