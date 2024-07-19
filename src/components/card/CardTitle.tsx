import { forwardRef } from "react";

const CardTitle = forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement>
>(({ className, ...res }, ref) => {
  return (
    <div
      ref={ref}
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...res}
    />
  );
});

CardTitle.displayName = "CardTitle";

export default CardTitle;
