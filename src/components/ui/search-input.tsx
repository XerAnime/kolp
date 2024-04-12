import * as React from "react";

import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  loading?: boolean;
  filter?: JSX.Element;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, icon, loading, filter, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md bg-slate-800 border border-input pl-3 pr-2 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1",
          className
        )}
      >
        {loading ? <Spinner size={16} /> : icon}
        <input
          {...props}
          type="search"
          ref={ref}
          className="w-full p-2 bg-slate-800 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
        {filter}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export { SearchInput };
