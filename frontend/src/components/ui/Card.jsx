import React from "react";
import { cn } from "../../lib/utils";

const Card = ({
  className,
  image,
  tag,
  title,
  description,
  action,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col min-w-[280px] flex-1 border overflow-hidden rounded-2xl border-solid border-[#FF4B55]",
        className,
      )}
      {...props}
    >
      <img src={image} alt={title} className="w-full h-[364px] object-cover" />
      <div className="flex flex-col gap-4 bg-[#004A57] p-8">
        <div className="text-[#EEE] text-sm">{tag}</div>
        <div className="text-[#EEE] text-[28px] leading-[38.64px]">{title}</div>
        <div className="text-[#EEE] text-lg leading-[27px]">{description}</div>
        <a href="#" className="text-[#EEE] text-sm hover:underline">
          {action}
        </a>
      </div>
    </div>
  );
};

export { Card };
