import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import ReactQueryWrapper from "@/components/react-query-wrapper";
import MainLayout from "@/components/layouts/main-layout";
import SessionWrapper from "@/components/SessionWrapper";
import GoogleAnalytics from "@/components/google-analytics";
import { Toaster } from "@/components/ui/toaster";
import classNames from "classnames";
import { LATO } from "@/next.font";
import "./globals.css";

const fontClass = classNames(LATO.variable);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(); // Get server side session

  return (
    <SessionWrapper>
      <html className={fontClass} lang="en">
        <body suppressHydrationWarning>
          <GoogleAnalytics />
          <ReactQueryWrapper>
            <MainLayout
              user={
                session?.user as {
                  name: string;
                  email: string;
                  image: string;
                }
              }
            >
              {children}
            </MainLayout>
          </ReactQueryWrapper>
          <Toaster />
        </body>
      </html>
    </SessionWrapper>
  );
}

export const metadata: Metadata = {
  title: { default: "WatchListify", template: "%s | WatchListify" },
  description: "Watch Anime and Drama online for free at WatchListify.site",
  generator: "Next.js",
  manifest: "/manifest.json",
  metadataBase: new URL(process.env.APP_URL as string),
  openGraph: {
    title: `Watch Anime and Drama online for free at WatchListify.site`,
    type: "website",
    images: "/images/logo.png",
    description: `The best website to watch anime and drama for free at WatchListify.`,
  },
  authors: [
    { name: "Raffy Amoguis" },
    {
      name: "Raffy Amoguis",
      url: "https://raffy.tech/",
    },
  ],
};
