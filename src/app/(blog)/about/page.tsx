import PageTitle from "@/components/PageTitle";
import SocialIcon from "@/components/icons";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <div className="divide-y divide-y-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <PageTitle>About me</PageTitle>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src="/images/avatar.jpg"
              width={192}
              height={192}
              className="w-48 h-48 rounded-full"
              alt="avatar"
            />
            <h2 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              James Giang
            </h2>
            <div className="text-gray-500 dark:text-gray-400">
              Frontend Engineer
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              @Talent Light
            </div>
            <div className="text-gray-500 dark:text-gray-400">@Vietnam</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="github" />
              <SocialIcon kind="linkedin" />
              <SocialIcon kind="facebook" />
            </div>
          </div>
          <div className="flex flex-col space-y-4 prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2 text-gray-500 dark:text-gray-400">
            <p>
              I am a final-year student and I have a strong passion for Frontend
              Development. Currently, I am looking for a Frontend Engineer role
              based in Vietnam. However, roles relating to Backend Development
              are fine for me. Additionally, you can see my works at{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-500">
                https://hinn1411.github.io/threejs-portfolio/
              </span>
            </p>
            <p>
              Currently, I am learning about Next.js and its ecosystem. This
              blog is the first part of my journey! After finalizing this
              website, I will move to learn about WebSocket, Jest/Vitest, and
              Story Book{" "}
            </p>
            <p>
              If you have any concerns, please send me a message via{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-500">
                hiengiang2822@gmail.com
              </span>{" "}
              or{" "}
              <a
                href="https://www.facebook.com/tuanhien.giang.9"
                target="_blank"
                className="font-semibold text-primary-600 dark:text-primary-500"
              >
                https://www.facebook.com/tuanhien.giang.9
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
