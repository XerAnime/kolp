import React from "react";
import Navbar from "../ui/navbar";

export default function MainLayout({
  children,
  user,
}: {
  children: React.ReactNode;
  user: {
    name: string;
    email: string;
    image: string;
  };
}) {
  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  );
}
