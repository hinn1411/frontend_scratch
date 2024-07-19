import { forwardRef } from "react";

const CardDescription = forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement>
>(({ className, ...res }, ref) => {
  return (
    <div
      ref={ref}
      className={`text-sm text-muted-foreground ${className}`}
      {...res}
    />
  );
});

CardDescription.displayName = "CardDescription";

export default CardDescription;
