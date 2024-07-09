import Link from "next/link";
import SocialIcon from "../social-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="mt-16 flex flex-col items-center">
          {/* Icons container  */}
          <div className="mb-3 flex gap-4">
            <div className="flex items-center">
              <SocialIcon
                kind="mail"
                href="https://github.com/hinn1411"
                size={6}
              />
            </div>
            <div className="flex items-center">
              <SocialIcon
                kind="github"
                href="https://github.com/hinn1411"
                size={6}
              />
            </div>
            <div className="flex items-center">
              <SocialIcon
                kind="facebook"
                href="https://www.facebook.com/tuanhien.giang.9"
                size={6}
              />
            </div>
            <div className="flex items-center">
              <SocialIcon
                kind="youtube"
                href="https://www.linkedin.com/in/giang-tuan-hien-329a64295/"
                size={6}
              />
            </div>
            <div className="flex items-center">
              <SocialIcon
                kind="linkedin"
                href="https://www.linkedin.com/in/giang-tuan-hien-329a64295/"
                size={6}
              />
            </div>

            <div className="flex items-center">
              <SocialIcon
                kind="instagram"
                href="https://www.instagram.com/dairenji1411/"
                size={6}
              />
            </div>
          </div>
          {/* Author */}
          <div className="mb-2 flex gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div>James Giang</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <Link href="/">Frontend Scratch</Link>
          </div>
          <div className="flex items-center gap-1 mb-8 text-sm  text-gray-500 dark:text-gray-400">
            <p>Made with</p>
            <div className="flex items-center justify-center">
              <Image
                src={"/icons/heart.svg"}
                alt="heart icon"
                height={12}
                width={12}
              />
            </div>
            <p>by me!</p>
          </div>
        </div>
      </footer>
    </>
  );
}
