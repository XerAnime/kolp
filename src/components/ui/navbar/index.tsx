"use client";
import React, { useState, FC } from "react";
import Link from "next/link";
import UserMenu from "./user-menu";
import WatchListifyLogo from "./logo";
import Drawer from "./navbar-drawer";

import { Search as SearchIcon, Library, Menu } from "lucide-react";
import { Button } from "../button";

interface NavbarProps {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

const Navbar: FC<NavbarProps> = ({ user }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex justify-between content-center px-2 md:px-16 py-2 bg-slate-800">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-5 md:space-x-3">
          <Menu
            className="block md:hidden cursor-pointer"
            onClick={handleToggleDrawer}
            id="drawer-button"
            aria-controls="drawer"
            aria-expanded="false"
          />

          <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

          {/* App logo */}
          <WatchListifyLogo />
          <Link href="/" className="text-xl font-semibold hidden md:block">
            WatchListify
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link className="text-md lg:text-lg" href="/recent-updates">
            Recent Updates
          </Link>
          <Link className="text-md lg:text-lg" href="/top-airing">
            Top Airing
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4 md:space-x-6">
        <Link href="/search">
          <SearchIcon />
        </Link>
        <Link href="/watchlist">
          {" "}
          <Library />
        </Link>
        {user ? (
          <UserMenu avatar={user.image} name={user.name} />
        ) : (
          <Link href="/login">
            <Button size="sm" variant="orange">
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
