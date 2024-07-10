"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Radio,
  RadioGroup,
  Transition,
} from "@headlessui/react";
import { Sun, Moon, Monitor } from "./icons";
import { useOuterClick } from "@/app/hooks/useOuterClick";
import { useTheme } from "./ThemeContext";
import { DarkModeSwitch } from "./DarkModeSwitch";

const ThemeSwitch = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [darkModeChecked, setDarkModeChecked] = useState<boolean>(false);
  const menubarRef = useRef<HTMLDivElement>(null);
  useOuterClick(menubarRef, () => setIsMenuOpen(false));
  const { theme, setTheme, mounted } = useTheme();

  useEffect(() => {
    setDarkModeChecked(theme === "dark");
  }, [theme]);

  const handleChangeTheme = (newTheme: string) => {
    setTheme(newTheme);
    setIsMenuOpen(false);
  };
  if (!mounted) {
    return null;
  }

  return (
    <div ref={menubarRef} className="">
      <Menu as="div" className="relative mt-1 inline-block text-left">
        <MenuButton aria-label="Theme">
          <DarkModeSwitch
            checked={darkModeChecked}
            onChange={(isChecked) => setDarkModeChecked(isChecked)}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            size={24}
          />
        </MenuButton>
        <Transition
          show={isMenuOpen}
          as={Fragment}
          enter="transition-all ease-out duration-300"
          enterFrom="opacity-0 scale-95 translate-y-[-10px]"
          enterTo="opacity-100 scale-100 translate-y-0"
          leave="transition-all ease-in duration-200"
          leaveFrom="opacity-100 scale-100 translate-y-0"
          leaveTo="opacity-0 scale-95 translate-y-[10px]"
        >
          <MenuItems className="absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
            <RadioGroup value={theme} onChange={handleChangeTheme}>
              <div className="p-1">
                <Radio value="light">
                  <MenuItem>
                    {({ focus }) => (
                      <button
                        onClick={() => handleChangeTheme("light")}
                        className={`${
                          focus
                            ? "bg-gray-100 dark:bg-gray-600"
                            : "hover:bg-gray-100 dark:hover:bg-gray-600"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-primary-500 dark:hover:text-primary-500`}
                      >
                        <Sun className="h-6 w-6" />
                        <span className="ml-2">Light</span>
                      </button>
                    )}
                  </MenuItem>
                </Radio>
                <Radio value="dark">
                  <MenuItem>
                    {({ focus }) => (
                      <button
                        onClick={() => handleChangeTheme("dark")}
                        className={`${
                          focus
                            ? "bg-gray-100 dark:bg-gray-600"
                            : "hover:bg-gray-100 dark:hover:bg-gray-600"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-primary-500 dark:hover:text-primary-500`}
                      >
                        <Moon className="h-6 w-6" />
                        <span className="ml-2">Dark</span>
                      </button>
                    )}
                  </MenuItem>
                </Radio>
                <Radio value="system">
                  <MenuItem>
                    {({ focus }) => (
                      <button
                        onClick={() => handleChangeTheme("system")}
                        className={`${
                          focus
                            ? "bg-gray-100 dark:bg-gray-600"
                            : "hover:bg-gray-100 dark:hover:bg-gray-600"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-primary-500 dark:hover:text-primary-500`}
                      >
                        <Monitor className="h-6 w-6" />
                        <span className="ml-2">System</span>
                      </button>
                    )}
                  </MenuItem>
                </Radio>
              </div>
            </RadioGroup>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

export default ThemeSwitch;
