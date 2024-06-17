export const sortOptions = [
  {
    label: (
      <span className="text-muted-foreground">
        Alphabetically: <span className="text-primary">A-z</span>
      </span>
    ),
    value: "title.asc",
  },
  {
    label: (
      <span className="text-muted-foreground">
        Alphabetically: <span className="text-primary">Z-a</span>
      </span>
    ),
    value: "title.desc",
  },
  {
    label: (
      <span className="text-muted-foreground">
        Price: <span className="text-primary">Low to high</span>
      </span>
    ),
    value: "subscriptionPrice.asc",
  },
  {
    label: (
      <span className="text-muted-foreground">
        Price: <span className="text-primary">High to low</span>
      </span>
    ),
    value: "subscriptionPrice.desc",
  },
] as const;
