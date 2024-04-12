import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { cn } from "@/lib/utils";

interface imgProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const Img: React.FC<imgProps> = ({ src, alt, className, onClick }) => {
  return (
    <LazyLoadImage
      className={cn(className, "rounded-sm")}
      src={src}
      alt={alt}
      effect="blur"
      onClick={onClick}
    />
  );
};

export { Img };
