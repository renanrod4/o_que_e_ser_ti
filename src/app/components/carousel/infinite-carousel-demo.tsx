import { InfiniteCarousel } from "./infinite-carousel";
import { Icons } from "../icons";

const LOGOS = [
  {
    name: "Python",
    icon: Icons.python,
  },
  {
    name: "Javascript",
    icon: Icons.javascript,
  },
  {
    name: "Java",
    icon: Icons.java,
  },
  {
    name: "c#",
    icon: Icons.cs,
  },
  {
    name: "c++",
    icon: Icons.cpp,
  },
  {
    name: "Rust",
    icon: Icons.rust,
  },
];

export const InfiniteCarouselDemo = () => {
  return (
    <div className="from-background relative w-[550px] items-center justify-center overflow-hidden bg-[radial-gradient(150%_70%_at_center,var(--tw-gradient-stops))] to-transparent py-20">
      <InfiniteCarousel reverseDirection={true} pauseOnHover={true}>
        {LOGOS.map((Logo) => (
          <Logo.icon key={Logo.name} className="size-12 cursor-pointer" />
        ))}
      </InfiniteCarousel>
      <div className="from-darker pointer-events-none absolute inset-y-0 left-0 top-1/4 h-1/2 w-1/3 bg-gradient-to-r" />
      <div className="from-darker pointer-events-none absolute inset-y-0 right-0 top-1/4 h-1/2 w-1/3 bg-gradient-to-l" />
    </div>
  );
};
