import { Children, ReactNode, cloneElement } from "react";

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter((cls) => typeof cls === "string").join(" ");
}

interface MarqueeProps {
  className?: string;
  children?: ReactNode;
  reverseDirection?: boolean;
  pauseOnHover?: boolean;
}

export const InfiniteCarousel = ({
  className,
  children,
  reverseDirection,
  pauseOnHover,
}: MarqueeProps) => {
  return (
    <div
      className={cn(
        "flex w-full overflow-x-hidden rounded-none [--duration:20s] [--gap:3rem]",
        className
      )}
    >
      <div
        className={cn(
          "animate-infinite-scroll flex w-max items-stretch gap-[--gap]",
          reverseDirection && "[animation-direction:reverse]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {Children.map(children, (child) =>
          cloneElement(child as React.ReactElement)
        )}
      </div>
    </div>
  );
};
