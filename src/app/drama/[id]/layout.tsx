import React, { Suspense } from "react";
import Loader from "@/components/ui/loader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
