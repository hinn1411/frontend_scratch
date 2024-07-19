import { adminPaths } from "@/utils/paths";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
const DashboardBreadcumb = () => {
  return (
    <ul className="hidden md:flex md:flex-wrap md:items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
      <li>
        <Link href={adminPaths.home()} className="text-muted-foreground">Admin</Link>
      </li>
      <li>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </li>
      <li>
        <Link href={adminPaths.dashboard()}>Dashboard</Link>
      </li>
    </ul>
  );
};

export default DashboardBreadcumb;
