import { FC, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";

interface DescriptionProps {
  className?: string;
  message: string | null;
}

const Description: FC<DescriptionProps> = ({ message, className }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setIsClamped(
        (ref.current as HTMLElement).scrollHeight >
          (ref.current as HTMLElement).clientHeight
      );
    }
  }, []);

  function handleShowMore() {
    setShowMore(!showMore);
  }
  return (
    <>
      <p
        ref={ref}
        className={cn(showMore ? "line-clamp-none" : "line-clamp-6", className)}
      >
        {message}
      </p>

      {isClamped && (
        <button
          className="mt-1 flex justify-center items-center space-x-1 bg-orange-400 text-white text-xs rounded-sm px-1 sm:px-2 py-0 sm:py-1 w-[78px]"
          onClick={handleShowMore}
        >
          {!showMore ? <Plus size={17} /> : <Minus size={17} />}
          <span>{!showMore ? `More` : `Less`}</span>
        </button>
      )}
    </>
  );
};

export { Description };
