"use client";
import {
  BookText,
  Home,
  LineChart,
  PanelLeft,
  Tags,
  Users2,
  X,
} from "lucide-react";
import { useState, useRef } from "react";
import NavItem from "./NavItem";
import { adminPaths } from "@/utils/paths";
import Image from "next/image";
import Link from "next/link";
import { useOuterClick } from "@/app/hooks/useOuterClick";

const AdminMobileNav = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useOuterClick(menuRef, () => setIsShow(false));
  return (
    <>
      <button
        onClick={() => setIsShow(true)}
        className={`h-10 w-10 sm:hidden inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors  border border-input bg-background rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
      >
        <PanelLeft className="w-5 h-5" />
        <span className="sr-only">Toggle Menu</span>
      </button>
      {/* Nav container */}
      <div
        className={`fixed inset-0 z-50 w-full h-full bg-black/20 transform duration-300 ease-in-out  ${
          isShow ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        {/* Inner container */}
        <div ref={menuRef} className={` relative bg-white w-3/4 p-6 h-full `}>
          <Link
            href={adminPaths.home()}
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 text-lg font-semibold text-accent-foreground md:h-8 md:w-8 md:text-base"
          >
            <Image
              src="/images/logo.png"
              alt="App logo"
              width={16}
              height={16}
              className="object-scale-down transition-all group-hover:scale-110"
            />
            {/* <VercelLogo className="w-3 h-3 transition-all group-hover:scale-110" /> */}
            <span className="sr-only">Frontend Scratch Admin</span>
          </Link>
          {/* Close btn */}
          <button
            onClick={() => setIsShow(false)}
            className="flex items-center justify-center absolute top-6 right-6 h-7 w-7 rounded-md hover:bg-accent"
          >
            <X className="w-5 h-5" />
          </button>
          <nav className="flex flex-col items-start">
            <NavItem
              href={adminPaths.home()}
              label="Dashboard"
              className="gap-4 px-2 text-muted-foreground hover:text-foreground w-auto"
            >
              <Home className="h-5 w-5" />
              <p className="text-lg font-semibold">Home</p>
            </NavItem>
            <NavItem
              href={adminPaths.allPosts()}
              label="Posts"
              className="gap-4 px-2 text-muted-foreground hover:text-foreground w-auto"
            >
              <BookText className="h-5 w-5" />
              <p className="text-lg font-semibold">Posts</p>
            </NavItem>
            <NavItem
              href={adminPaths.allTags()}
              label="Tags"
              className="gap-4 px-2 text-muted-foreground hover:text-foreground w-auto"
            >
              <Tags className="h-5 w-5" />
              <p className="text-lg font-semibold">Tags</p>
            </NavItem>
            <NavItem
              href={adminPaths.viewers()}
              label="Viewers"
              className="gap-4 px-2 text-muted-foreground hover:text-foreground w-auto"
            >
              <Users2 className="h-5 w-5" />
              <p className="text-lg font-semibold">Viewers</p>
            </NavItem>
            <NavItem
              href={adminPaths.analytics()}
              label="Analytics"
              className="gap-4 px-2 text-muted-foreground hover:text-foreground w-auto"
            >
              <LineChart className="h-5 w-5" />
              <p className="text-lg font-semibold">Analytics</p>
            </NavItem>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AdminMobileNav;
