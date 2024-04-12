import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Login from "@/components/islets/login";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex h-[calc(100vh-56px)] items-center justify-center">
      <Login />
    </div>
  );
}
