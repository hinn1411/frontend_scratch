import { forwardRef, HTMLAttributes } from "react";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...res }, ref) => {
    return <div className={`p-6 pt-0 ${className}`} {...res} ref={ref} />;
  }
);

CardContent.displayName = "CardContent";

export default CardContent;
