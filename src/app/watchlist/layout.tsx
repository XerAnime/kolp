import Loader from "@/components/ui/loader";
import React, { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
