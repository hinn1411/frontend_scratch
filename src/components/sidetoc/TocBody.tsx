"use client";

import useSidebarStore from "./store";

interface TocBodyProps {}

const TocBody = ({}: TocBodyProps) => {
  const { isSidebarOpen } = useSidebarStore();
  // if (!isSidebarOpen) {
  //   return null;
  // }
  return (
    <div className={`fixed left-0 top-0 z-50 h-screen md:flex `}>
      <div
        className={`fixed left-0 top-0 z-50 flex flex-col h-screen w-64 bg-gray-50 p-4 dark:bg-gray-900 transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="mt-20">
          <div className="text-xl font-bold text-heading-400">On this Page</div>
          <div className="my-auto overflow-y-auto">
            <ul className="space-y-2 overflow-y-auto my-auto text-primary-500">
              {[
                "Introduction",
                "Motivation",
                "Changes",
                "New features",
                "Libraries",
                "Configuration",
                "Posts",
                "Authors",
                "SiteMetadata file and new localeMetadata file Projects tab",
                "Search bar",
                "Things to do",
              ].map((content, index) => (
                <li
                  className="hover:text-heading-400 cursor-pointer font-medium"
                  key={index}
                >
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TocBody;
