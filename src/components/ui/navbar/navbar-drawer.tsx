import React from "react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-y-0 left-0 max-w-xs w-full bg-background shadow-lg p-4 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">WatchListify</h1>
          <X size={20} onClick={onClose} />
        </div>

        {/* <div className="mt-16 w-1/2 m-auto"> */}
        <Separator className="my-4" />
        <div className="mt-6 flex flex-col justify-items-center space-y-2">
          <Link className="text-sm" href="/recent-updates">
            Recent Updates
          </Link>
          <Separator className="my-4" />
          <Link className="text-sm" href="/top-airing">
            Top Airing
          </Link>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Drawer;
