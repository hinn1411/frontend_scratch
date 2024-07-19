import { forwardRef } from "react";

const CardFooter = forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement>
>(({ className, ...res }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex items-center p-6 pt-0 ${className}`}
      {...res}
    />
  );
});

CardFooter.displayName = "CardFooter";

export default CardFooter;
