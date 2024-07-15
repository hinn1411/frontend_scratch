import Image from "next/image";

interface CommentListProps {}

const CommentList = ({}: CommentListProps) => {
  return (
    <ul className="flex flex-col gap-4 mt-4 divide-y divide-gray-200">
      {[
        "Bài viết hay quá shop ơi",
        "Đỉnh đó friend, tui hóng bài mới của ông",
        "Có một số behaviors chưa được xử lý, ông tìm hiểu rồi viết thêm nha",
      ].map((comment, index) => (
        <li className="pt-4 flex items-center space-x-2" key={index}>
          {/* Image  */}
          <div>
            <Image
              src={"/images/avatar.jpg"}
              width={48}
              height={48}
              alt="author avatar"
              className="h-12 w-12 object-cover rounded-full"
            />
          </div>
          <dl className="flex-1 whitespace-nowrap text-sm leading-5">
            <dt className="sr-only">Author name</dt>
            <dd className="flex justify-between  font-semibold text-gray-900 dark:text-gray-100">
              <p className="space-x-2 ">
                <span>Nguyễn Văn A</span>
                <span className="text-xs text-gray-400 dark:text-gray-400">
                  12:33 - 14/7/2024
                </span>
              </p>
              <p className="text-xs uppercase cursor-pointer">Reply</p>
            </dd>
            <dt className="sr-only">LinkedIn</dt>
            <dd>
              <p className="">{comment}</p>
            </dd>
          </dl>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
