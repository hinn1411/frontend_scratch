import { headerNavLinks } from "@/data/headerNavLinks";
import Image from "next/image";
import Link from "next/link";
import SearchButton from "../search/SearchButton";
import ThemeSwitch from "../theme/ThemeSwitch";
import { paths } from "@/utils/paths";
import LanguageSwitch from "../languageswitch";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center py-10">
        {/* Logo  */}
        <Link
          href={paths.home()}
          className="flex items-center justify-center gap-2"
        >
          <Image
            src="/images/logo.png"
            alt="app logo"
            style={{
              width: "auto",
              height: "auto",
            }}
            width={40}
            height={40}
            className="overflow-hidden"
          />
          <p className="text-2xl font-semibold cursor-pointer hidden sm:block">
            Frontend Scratch
          </p>
        </Link>
        {/* Links container  */}
        <ul className="hidden md:flex gap-6 font-semibold">
          {headerNavLinks.map((link, index) => (
            <li className="text-gray-500 hover:text-gray-900" key={index}>
              <Link href={link.href as string}>{link.title}</Link>
            </li>
          ))}
        </ul>
        {/* Btns container */}
        <div className="flex items-center gap-4">
          <SearchButton />
          <ThemeSwitch />
          <LanguageSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
