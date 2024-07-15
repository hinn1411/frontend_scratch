import { Comments, WalineComments } from "@/components/comment";
import CommentForm from "@/components/comment/CommentForm";
import CommentList from "@/components/comment/CommentList";
import PageTitle from "@/components/PageTitle";
import ScrollToTopAndComment from "@/components/scroll";
import SectionContainer from "@/components/SectionContainer";
import Share from "@/components/share";
import Sidetoc from "@/components/sidetoc";
import { PostTag } from "@/components/tag";
import TargetCard from "@/components/targetcard/TargetCard";
import { paths } from "@/utils/paths";
import Image from "next/image";
import Link from "next/link";


export default function PostPage() {
  return (
    <>
      <ScrollToTopAndComment />
      <Sidetoc />
      <SectionContainer>
        <article>
          <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <header className="pt-6 xl:pb-6">
              <div className="space-y-1 text-center">
                <dl className="space-y-10">
                  {/* Published date  */}
                  <div>
                    <dt className="sr-only">Time</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime="December 12, 2023">
                        December 12, 2023
                      </time>
                    </dd>
                  </div>
                </dl>
                {/* Post title  */}
                <div>
                  <PageTitle>
                    How browser render HTML, CSS and JavaScript?
                  </PageTitle>
                </div>
              </div>
            </header>
            {/* Main content  */}
            <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
              <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                <dt className="sr-only">Author</dt>
                {/* Authors list */}
                <dd>
                  <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                    {["Giang Tuan Hien", "James Giang"].map((author, index) => (
                      <li className="flex items-center space-x-2" key={index}>
                        {/* Image  */}
                        <Link href={paths.home()}>
                          <Image
                            src={"/images/avatar.jpg"}
                            width={38}
                            height={38}
                            alt="author avatar"
                            className="h-10 w-10 rounded-full"
                          />
                        </Link>
                        <dl className="whitespace-nowrap text-sm font-medium leading-5">
                          <dt className="sr-only">Author name</dt>
                          <dd className="text-gray-900 dark:text-gray-100">
                            {author}
                          </dd>
                          <dt className="sr-only">LinkedIn</dt>
                          <dd>
                            <Link
                              href={paths.home()}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              @dairenji1411
                            </Link>
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>
              <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                {/* Targets for learners */}
                <div className="not-prose mt-4">
                  <TargetCard />
                </div>

                <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
                  <code>
                    Main content, including Outline, Content and References
                  </code>
                </div>
                <Share />
                {/* Comment  */}
                <div className="space-y-8" id="comment">
                  <CommentForm />
                  <CommentList />
                </div>
              </div>
              <footer>
          
                <div className="divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                  {/* Tags container */}
                  <div className="py-4 xl:py-8">
                    <p className="tex-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </p>
                    <ul className="flex flex-wrap">
                      {["Next.js", "html", "css"].map((tag, index) => (
                        <PostTag text={tag} key={index} />
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-600 dark:hover:text-primary-400">
                        Previous Articles
                      </p>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={paths.viewPost("slug")}>
                          Introducing Multi-part Posts with Nested Routing
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-600 dark:hover:text-primary-400">
                        Next Articles
                      </p>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={paths.viewPost("slug")}>
                          Release of Tailwind Nextjs Starter Blog v2.0
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </article>
      </SectionContainer>
    </>
  );
}
