import { forwardRef } from "react";

const CardHeader = forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement>
>(({ className, ...res }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col space-y-1.5 p-6 ${className}`}
      {...res}
    />
  );
});

CardHeader.displayName = "CardHeader";

export default CardHeader;
