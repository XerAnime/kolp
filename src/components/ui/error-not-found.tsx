import React from "react";
import { useRouter } from "next/navigation";
import { Img } from "./img";
import { Button } from "./button";

const ErrorNotFound: React.FC<{ reset: () => void }> = ({ reset }) => {
  const router = useRouter();
  return (
    <div className="flex h-[calc(100vh-56px)] items-center justify-center">
      <div className="flex flex-col space-y-4">
        <Img className="w-52" src="/images/404.svg" alt="404 Error" />
        <h1 className="text-center text-xl font-semibold">404 Error</h1>
        <h2 className="text-center text-md">Something went wrong!</h2>
        <div className="flex justify-center items-center space-x-2">
          <Button
            className="w--34"
            variant="secondary"
            size="sm"
            onClick={() => router.back()}
          >
            Go back
          </Button>
          <Button
            className="w-34"
            variant="orange"
            size="sm"
            onClick={() => window.location.reload()}
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorNotFound;
