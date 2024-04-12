"use client";
import React from "react";
import { ChevronDown, Check } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { useWatchListType } from "@/states/useWatchListType";

const TYPE = ["Anime", "Drama"];

const TypeFilter = () => {
  const [type, setType] = useWatchListType((state) => [
    state.type,
    state.setType,
  ]);

  return (
    <Menubar className="border-0 px-0 rounded-none">
      <MenubarMenu>
        <MenubarTrigger className="px-0 py-0">
          <Button variant="secondary" size="sm">
            {!!type ? type : "Type"}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </MenubarTrigger>
        <MenubarContent className="min-w-[8rem] bg-secondary" align="end">
          <MenubarItem onClick={() => setType("")}>
            <FilterLabel
              label="All"
              icon={type === "" && <Check size={17} />}
            />
          </MenubarItem>
          {TYPE.map((val: string) => (
            <MenubarItem key={val} onClick={() => setType(val)}>
              <FilterLabel
                label={val}
                icon={type === val && <Check size={17} />}
              />
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

const FilterLabel: React.FC<{ label: string; icon?: React.ReactNode }> = ({
  label,
  icon,
}) => {
  return (
    <div className="flex justify-between content-center w-full">
      <h1>{label}</h1>
      {icon}
    </div>
  );
};

export default TypeFilter;
