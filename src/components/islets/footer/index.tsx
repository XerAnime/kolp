import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

export default function Footer() {
  return (
    <div className="mt-28">
      <Separator className="my-4" />

      <div className="mt-4 mb-2 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          <p className="text-slate-500 text-sm">
            WatchListify does not store any files on our server, we only linked
            to the media which is hosted on 3rd party services.
          </p>
          <p className="text-slate-500 text-sm">
            © WatchListify.site. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-2 mt-4 lg:mt-0">
          <Link
            href="https://github.com/raffyxyz/watchlistify-re"
            className="text-sm text-slate-500"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconBrandGithub size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
