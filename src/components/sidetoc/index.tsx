"use client";

import { useRef } from "react";
import useSidebarStore from "./store";
import { useOuterClick } from "@/app/hooks/useOuterClick";
import Button from "./Button";
import TocBody from "./TocBody";

interface SidetocProps {}
const Sidetoc = ({}: SidetocProps) => {
  const { closeSidebar } = useSidebarStore();
  const sidebarRef = useRef<HTMLDivElement>(null);
  useOuterClick(sidebarRef, closeSidebar);
  return (
    <div ref={sidebarRef}>
      <TocBody />
      <Button />
    </div>
  );
};

export default Sidetoc;
