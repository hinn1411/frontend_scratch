import React from "react";

const CardContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-card text-card-foreground rounded-lg border lg:w-auto ${className}`}
      {...props}
    />
  );
});
CardContainer.displayName = "CardContainer";
export default CardContainer;
