import { Home, BookText, Users2, LineChart, Settings } from "lucide-react";
import Link from "next/link";
import { VercelLogo } from "../icons/icons";
import NavItem from "./NavItem";
import { adminPaths } from "@/utils/paths";

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {/* Logo */}
        <Link
          href={adminPaths.home()}
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-adminPrimary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <VercelLogo className="w-3 h-3 transition-all group-hover:scale-110" />
          <span className="sr-only">Frontend Scratch Admin</span>
        </Link>
        <NavItem href={adminPaths.home()} label="Dashboard">
          <Home className="h-5 w-5" />
        </NavItem>
        <NavItem href={adminPaths.allPosts()} label="Posts">
          <BookText className="h-5 w-5" />
        </NavItem>
        <NavItem href={adminPaths.viewers()} label="Viewers">
          <Users2 className="h-5 w-5" />
        </NavItem>
        <NavItem href={adminPaths.analytics()} label="Analytics">
          <LineChart className="h-5 w-5" />
        </NavItem>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <NavItem href={adminPaths.settings()} label="Settings">
          <Settings className="h-5 w-5" />
        </NavItem>
      </nav>
    </aside>
  );
}
