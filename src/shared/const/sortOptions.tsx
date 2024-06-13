export const sortOptions = [
  {
    label: (
      <span className="text-muted-foreground">
        Alphabetically: <span className="text-primary">A-z</span>
      </span>
    ),
    value: "alphabetical.asc",
  },
  {
    label: (
      <span className="text-muted-foreground">
        Alphabetically: <span className="text-primary">Z-a</span>
      </span>
    ),
    value: "alphabetical.desc",
  },
  {
    label: (
      <span className="text-muted-foreground">
        Price: <span className="text-primary">Low to high</span>
      </span>
    ),
    value: "price.asc",
  },
  {
    label: (
      <span className="text-muted-foreground">
        Price: <span className="text-primary">High to low</span>
      </span>
    ),
    value: "price.desc",
  },
] as const;
