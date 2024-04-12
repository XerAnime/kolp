import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GridLayoutProp = {
  children: ReactNode;
  className?: string;
};

const GridLayoutPage: FC<GridLayoutProp> = ({ children, className }) => {
  return (
    <div
      className={cn(
        className,
        "mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-3 2xl:gap-5"
      )}
    >
      {children}
    </div>
  );
};

const GridLayoutWrapper: FC<GridLayoutProp> = ({ children, className }) => {
  return (
    <div
      className={cn(
        className,
        "cursor-pointer xs:w-[190px] sm:w-[200px] md:w-full"
      )}
    >
      {children}
    </div>
  );
};

export { GridLayoutPage, GridLayoutWrapper };
