"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavItemProps {
  href: string;
  label: string;
  className?: string;
  children: ReactNode;
}

const NavItem = ({ children, href, label, className }: NavItemProps) => {
  const currentPath = usePathname();
  return (
    <Link
      href={href}
      className={`flex h-9 w-9 justify-center items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8
        ${currentPath === href && "bg-accent text-foreground"} ${className}`}
    >
      {children}
      <span className="sr-only">{label}</span>
    </Link>
  );
};

export default NavItem;
