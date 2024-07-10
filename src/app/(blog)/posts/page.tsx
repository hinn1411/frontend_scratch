"use client";

import Pagination from "@/components/pagination/Pagination";
import { FilterTag } from "@/components/tag";
import { paths } from "@/utils/paths";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { opacity: 0, x: -25, y: 0 },
  show: { opacity: 1, x: 0, y: 0 },
};
export default function AllPostsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div>
        {/* Header */}
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All posts
          </h1>
        </div>
        {/* Main content  */}
        <div className="flex sm:space-x-24">
          {/* Tags block */}
          <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-800/40 sm:flex">
            <div className="px-6 py-4">
              <button
                className={`text-heading-500 dark:text-heading-400 font-bold uppercase`}
              >
                All tags
              </button>
              <ul>
                <FilterTag tagCount={1} tagName="CSS" />
                <FilterTag tagCount={2} tagName="HTML" />
                <FilterTag tagCount={1} tagName="CSS" />
                <FilterTag tagCount={2} tagName="HTML" />
                <FilterTag tagCount={1} tagName="CSS" />
                <FilterTag tagCount={2} tagName="HTML" />
                <FilterTag tagCount={1} tagName="CSS" />
                <FilterTag tagCount={2} tagName="HTML" />
                <FilterTag tagCount={1} tagName="CSS" />
                <FilterTag tagCount={2} tagName="HTML" />
                <FilterTag tagCount={1} tagName="CSS" />
                <FilterTag tagCount={2} tagName="HTML" />
              </ul>
            </div>
          </div>

          <div>
            {/* Posts block  */}
            <motion.ul variants={container} initial="hidden" animate="show">
              {[1, 1, 1, 1, 1].map((post, index) => (
                <motion.li variants={item} className="py-5" key={index}>
                  <article className="flex flex-col space-y-2 xl:space-y-0">
                    <dl>
                      <dt className="sr-only">t.pub</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime="November 17, 2023">
                          November 17, 2023
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-3">
                      <div>
                        <div className="text-2xl font-bold leading-8 tracking-tight">
                          <Link
                            href={paths.viewPost("slug")}
                            className="text-gray-900 dark:text-gray-100"
                            aria-labelledby={`post title`}
                          >
                            <h2>Internationalization of V 2.0</h2>
                          </Link>
                        </div>
                        <ul className="flex flex-wrap">
                          {["html", "css", "javascript"].map((t) => (
                            <li key={t} className="my-3">
                              <button
                                className={`text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500
                            mr-3 text-sm font-medium uppercase`}
                                aria-label={`View posts tagged ${t}`}
                              >
                                {`${t}`}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400  line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus a inventore minus repellendus rem aliquid
                        nobis eaque sit magnam. Assumenda explicabo laboriosam,
                        ea dignissimos harum fugiat magnam suscipit perspiciatis
                        hic?
                      </div>
                    </div>
                  </article>
                </motion.li>
              ))}
            </motion.ul>
            {/* Pagination  */}
            <Pagination
              totalPages={5}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
