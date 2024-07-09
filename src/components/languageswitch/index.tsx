"use client";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  Transition,
  RadioGroup,
  MenuButton,
  MenuItems,
  Radio,
  MenuItem,
} from "@headlessui/react";
import { ChevronDownIcon } from "./icon";
const LanguageSwitch = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const langeRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <MenuButton
              className="inline-flex rounded-md px-1 py-2 font-bold leading-5 text-gray-700 shadow-sm dark:text-white"
              aria-haspopup="true"
              aria-expanded={open}
            >
              <span>En</span>
              <ChevronDownIcon
                className={`ml-1 mt-1 transform transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </MenuButton>
          </>
        )}
      </Menu>
    </div>
  );
};

export default LanguageSwitch;
