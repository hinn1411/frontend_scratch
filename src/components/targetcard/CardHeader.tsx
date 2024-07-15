import React from "react";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col space-y-1.5${className}`}
      {...props}
    />
  );
});
CardHeader.displayName = "CardHeader";
export default CardHeader;
