import NextImage, { ImageProps } from "next/image";

const Image = ({ ...res }: ImageProps) => <NextImage {...res} />;

export default Image;
