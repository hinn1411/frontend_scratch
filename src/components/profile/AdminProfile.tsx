"use client";
import Image from "next/image";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
  Radio,
  RadioGroup,
  Transition,
} from "@headlessui/react";
import { useRef, useState } from "react";
import { useOuterClick } from "@/app/hooks/useOuterClick";
import { Fragment } from "react";
const AdminProfile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const profileRef = useRef<HTMLDivElement>(null);
  useOuterClick(profileRef, () => setIsProfileOpen(false));
  return (
    <Menu ref={profileRef} as="div" className="relative inline-block">
      <MenuButton
        onClick={() => setIsProfileOpen((prev) => !prev)}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-input bg-background"
        aria-label="Profile Menu"
      >
        <Image
          src={"/placeholder-user.jpg"}
          alt="admin avatar"
          width={36}
          height={36}
          className="w-9 h-9 rounded-full overflow-hidden"
        />
      </MenuButton>
      <Transition
        show={isProfileOpen}
        as={Fragment}
        enter="transition-all ease-out duration-300"
        enterFrom="opacity-0 scale-95 translate-y-[-10px]"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition-all ease-in duration-200"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-95 translate-y-[10px]"
      >
        <MenuItems className="absolute flex flex-col text-sm right-0 mt-2 w-32 z-50 origin-top-right overflow-hidden rounded-md border bg-popover text-popover-foreground p-1 shadow-md">
          <MenuItem>
            <p className="px-2 py-1.5 font-semibold">My Account</p>
          </MenuItem>
          <MenuSeparator className="my-1 h-px bg-gray-100" />
          <MenuItem>
            <button className="px-2 py-1.5 text-start hover:bg-accent hover:text-accent-foreground">
              Setting
            </button>
          </MenuItem>
          <MenuItem>
            <button className="px-2 py-1.5 text-start hover:bg-accent">
              Support
            </button>
          </MenuItem>
          <MenuSeparator className="my-1 h-px bg-gray-100" />
          <MenuItem>
            <button className="px-2 py-1.5 text-start cursor-pointer hover:bg-accent ">
              Sign In
            </button>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default AdminProfile;
