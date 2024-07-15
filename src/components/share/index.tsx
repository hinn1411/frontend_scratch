"use client";

import { useState } from "react";
import SocialIcon from "../social-icons";

interface ShareProps {
  className?: string;
}

const Share = ({ className }: ShareProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    const TEN_MINUTES = 10 * 60 * 1000;
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), TEN_MINUTES);
  };
  return (
    <div className="m-4 mt-8 flex flex-col items-center justify-center pt-4 sm:flex-row">
      {/* Share button  */}
      <div className="mb-4 sm:mb-0">
        <p className="text-highlighted dark:text-darkmode-highlighted mr-3 px-4 font-bold text-primary-500 sm:border-r-2">
          Share
        </p>
      </div>
      {/* Social media icons  */}
      <div>
        <ul className={`grid grid-cols-4 gap-4 ${className}`}>
          <li className="ml-4 flex items-center">
            <SocialIcon
              kind="facebook"
              size={5}
              aria-label="Facebook share icon"
              href={`https://facebook.com/sharer/sharer.php?u=siteUrl/locale/targetSegment/slug`}
            />
          </li>

          <li className="ml-4 flex items-center">
            <SocialIcon
              kind="linkedin"
              size={5}
              aria-label="LinkedIn share icon"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=siteUrl/locale/targetSegment/slug&title=title&summary=description&source=siteUrl`}
            />
          </li>

          <li className="relative ml-4 flex items-center">
            <button
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => {
                setShowMenu(false);
                setIsCopied(false);
              }}
              onClick={handleCopy}
              className="fill-current text-gray-700 outline-none hover:text-primary-500 focus:outline-none dark:text-gray-200 dark:hover:text-primary-400"
            >
              <svg height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </button>
            {showMenu && (
              <div className="absolute right-0 top-8 w-32 rounded-md bg-white p-2 text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:ouline-none dark:bg-gray-800">
                <p
                  className={`${
                    isCopied ? "text-primary-500 dark:text-primary-400" : ""
                  }`}
                >
                  {isCopied ? "URL Copied!" : "Copy URL"}
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Share;
