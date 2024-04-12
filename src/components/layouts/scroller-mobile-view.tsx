import { ReactNode, FC } from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

const ScrollerMobileView: FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("block md:hidden", className)}>
      <ScrollArea className="mt-4 w-full whitespace-nowrap">
        {children}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

const ScrollerMobileWrapper: FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("flex w-max space-x-2", className)}>{children}</div>
  );
};

const ScrollerMobileContent: FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("cursor-pointer w-[200px]", className)}>{children}</div>
  );
};

export { ScrollerMobileView, ScrollerMobileWrapper, ScrollerMobileContent };
