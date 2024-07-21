// @ts-nocheck
import Link from "./Link";
import TOCInline from "pliny/ui/TOCInline.js";
import Pre from "pliny/ui/Pre.js";
import NewLetterForm from "../newletter/NewLetterForm";
import type { MDXComponents } from "mdx/types";
import Image from "./Image";
import TableWrapper from "./TableWrapper";
import AudioPlayer from "./AudioPlayer";
import WebsiteEmbed from "./WebsiteEmbed";

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  table: TableWrapper,
  AudioPlayer,
  WebsiteEmbed,
  NewLetterForm,
};
