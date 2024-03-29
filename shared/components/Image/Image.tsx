import { ImageContent } from "./Image.styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypographyText } from "../Typograph/Typograph.styled";
import { Skeleton } from "@mui/material";

export type ImageType = {
  width?: string;
  height?: string;
  cover?: boolean | undefined;
  isNotLoading?:boolean;
  src?: string;
  alt?: string;
  radius?: string;
  onClick?: () => void;
};

export const ImageTag = ({
  width,
  height,
  isNotLoading,
  alt,
  cover,
  src,
  radius,
  onClick,
}: ImageType) => {
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    setImageLoading(true);
  }, []);
  return (
    <ImageContent
      onClick={onClick}
      width={width}
      height={height}
      radius={radius}
    >
      {/* {imageLoading && <Skeleton variant="rectangular" width={width} height={height} />} */}
      {imageLoading && !isNotLoading && <TypographyText center="true" color="gray" >Loading...</TypographyText>}
      <Image
        layout="fill"
        priority
        onLoad={() => setImageLoading(false)}
        alt={alt}
        src={src}
        objectFit={cover ? "cover" : "contain"}
      />
    </ImageContent>
  );
};
