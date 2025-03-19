
import React from "react";

interface FeatureItemProps {
  icon: string;
  text: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-stretch gap-2 mt-3 first:mt-[21px]">
      <img
        src={icon}
        className="aspect-[1] object-contain w-5 shrink-0"
        alt=""
      />
      <div className="basis-auto">{text}</div>
    </div>
  );
};
