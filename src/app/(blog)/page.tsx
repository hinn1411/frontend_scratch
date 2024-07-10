import { CustomLink } from "@/components/mdxcomponents";
import NewLetterForm from "@/components/newletter/NewLetterForm";
import { PostTag } from "@/components/tag";
import { paths } from "@/utils/paths";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Introduction */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 track-tight text-heading-400 dark:text-heading-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My lastest posts about CSS, Frontend and Coding Challenges!
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {[1, 2, 2, 3, 45].map((post, index) => (
            <li key={index} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  {/* Pushlished date */}
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime="November 17, 2023">
                        November 17, 2023
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        {/* Post Title */}
                        <div className="text-2xl font-bold leading-8 tracking-tight">
                          <CustomLink
                            href={`/posts/how-to-create-image-slide`}
                            aria-label="???"
                            className="text-gray-900 dark:text-gray-100"
                          >
                            <h2>How to create Image slide?</h2>
                          </CustomLink>
                        </div>
                        {/* Tags */}
                        <ul className="flex flex-wrap">
                          {["html", "css", "responsive"].map((tag, index) => (
                            <li key={index}>
                              <PostTag text={tag} />
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Overview */}
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Minus recusandae mollitia voluptatibus soluta
                        libero magnam similique at, reprehenderit ab provident
                        tempora quas architecto perspiciatis consequatur, nobis
                        labore quibusdam deserunt nulla.
                      </div>
                      {/* View details button */}
                      <div className="text-base font-medium leading-6">
                        <CustomLink
                          href={paths.viewPost("slug")}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          Read more &rarr;
                        </CustomLink>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end text-base font-medium leading-6">
        <Link
          className="text-lg text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          href={paths.viewAllPosts()}
        >
          All post &rarr;
        </Link>
      </div>
      <div className="flex items-center justify-center pt-4">
        <NewLetterForm />
      </div>
    </main>
  );
}
