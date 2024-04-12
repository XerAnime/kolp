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
import { useWatchListStatus } from "@/states/useWatchListStatus";

const STATUS = ["Watching", "Completed", "Dropped", "On-Hold", "Plan to watch"];

const StatusFilter = () => {
  const [status, setStatus] = useWatchListStatus((state) => [
    state.status,
    state.setStatus,
  ]);

  return (
    <Menubar className="border-0 px-0 rounded-none">
      <MenubarMenu>
        <MenubarTrigger className="px-0 py-0">
          <Button variant="secondary" size="sm">
            {!!status ? status : "Status"}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </MenubarTrigger>
        <MenubarContent className="min-w-[8rem] bg-secondary" align="end">
          <MenubarItem onClick={() => setStatus("")}>
            <FilterLabel
              label="All"
              icon={status === "" && <Check size={17} />}
            />
          </MenubarItem>
          {STATUS.map((stat: string) => (
            <MenubarItem key={stat} onClick={() => setStatus(stat)}>
              <FilterLabel
                label={stat}
                icon={status === stat && <Check size={17} />}
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

export default StatusFilter;
