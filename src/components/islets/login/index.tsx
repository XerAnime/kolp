"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { IconBrandGoogleFilled, IconBrandGithub } from "@tabler/icons-react";
import { encodeUrlPart } from "@/lib/utils";

const Login = () => {
  const searchParams = useSearchParams();
  const refParams = searchParams.get("ref") as string;

  function handleLoginClick(type: "google" | "github", callback: string) {
    if (refParams) {
      signIn(type, {
        callbackUrl: `${
          process.env.NEXT_PUBLIC_APP_URL + encodeUrlPart(callback)
        }`,
      });
    } else {
      signIn(type);
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-orange-400 text-2xl md:text-3xl lg:text-4xl font-semibold">
        Login to Your Account
      </h1>
      <h3 className="mt-4 mb-10 text-center text-lg md:text-2xl">
        Create an awesome library of drama&apos;s and anime.
      </h3>

      <Button
        className="w-8/12 m-auto"
        variant="secondary"
        onClick={() => handleLoginClick("github", refParams)}
      >
        <IconBrandGithub className="mr-2 h-4 w-4" />
        Sign up with Github
      </Button>
      <p className="text-center text-muted-foreground text-xs mt-2 mb-2">Or</p>
      <Button
        className="w-8/12 m-auto"
        variant="default"
        onClick={() => handleLoginClick("google", refParams)}
      >
        <IconBrandGoogleFilled className="mr-2 h-4 w-4" />
        Sign up with Google
      </Button>
    </div>
  );
};

export default Login;
