import { forwardRef } from "react";

const Card = forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement>
>(({ className, ...res }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...res}
    />
  );
});

Card.displayName = "Card";

export default Card;
