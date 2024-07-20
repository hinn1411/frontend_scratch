import { ReactNode } from "react";

interface BadgeProps {
  className: string;
  children: ReactNode;
}
const Badge = ({ className, children, ...res }: BadgeProps) => {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
      {...res}
    >
      {children}
    </div>
  );
};

export default Badge;
