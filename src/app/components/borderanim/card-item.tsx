interface CardItemProps {
  text: string;
  title: string;
  className?: string;
}

export const CardItem = ({ text, title, className }: CardItemProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-evenly h-full w-full rounded-xl p-12 ${className}`}
    >
      <div className=" text-5xl  pb-8 flex justify-center items-center text-center">
        {title}
      </div>
      <div className=" flex justify-center items-center text-center text-[1.5rem]" >
        {text}
      </div>
    </div>
  );
};