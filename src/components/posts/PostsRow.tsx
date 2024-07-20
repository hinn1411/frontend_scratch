"use client";
import { PostType } from "@/data/posts";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import Image from "next/image";
import Badge from "../badge/Badge";
import { MoreHorizontal } from "lucide-react";
import { Fragment, useRef, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Radio,
  RadioGroup,
  Transition,
} from "@headlessui/react";
import { useOuterClick } from "@/app/hooks/useOuterClick";

interface PostsRowProps {
  post: PostType;
}
export default function PostsRow({ post }: PostsRowProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useOuterClick(menuRef, () => setIsMenuOpen(false));
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          src={post.imageUrl}
          alt="Post image"
          width={64}
          height={64}
          className="w-16 h-16 aspect-square rounded-md object-cover"
        />
      </TableCell>
      <TableCell className="font-medium">{post.title}</TableCell>
      <TableCell>
        <Badge className="capitalize">{post.status}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{post.totalViews}</TableCell>
      <TableCell className="hidden md:table-cell">{post.createdAt}</TableCell>
      <TableCell className="hidden md:table-cell">{post.updatedAt}</TableCell>
      <TableCell>
        <div ref={menuRef}>
          <Menu as="div" className="relative inline-block">
            <MenuButton
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent"
              aria-label="Post Action"
            >
              <MoreHorizontal className="w-4 h-4" />
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
              <MenuItems className="absolute flex flex-col text-sm right-0 mt-2 w-32 z-50 origin-top-right overflow-hidden rounded-md border bg-popover text-popover-foreground p-1 shadow-md">
                <MenuItem>
                  <p className="px-2 py-1.5 font-semibold">Actions</p>
                </MenuItem>
                <MenuItem>
                  <button className="px-2 py-1.5 text-start hover:bg-accent hover:text-accent-foreground">
                    Edit
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="px-2 py-1.5 text-start hover:bg-accent">
                    Hide
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="px-2 py-1.5 text-start text-red-500 cursor-pointer hover:bg-accent ">
                    Delete
                  </button>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </TableCell>
    </TableRow>
  );
}
