
import React from "react";
import { FeatureItem } from "./FeatureItem";

interface Feature {
  icon: string;
  text: string;
}

interface RoleCardProps {
  title: string;
  icon: string;
  description: string;
  features: Feature[];
}

export const RoleCard: React.FC<RoleCardProps> = ({
  title,
  icon,
  description,
  features,
}) => {
  return (
    <div className="bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border flex w-full flex-col text-sm text-[rgba(113,123,158,1)] font-normal mx-auto px-[33px] py-[34px] rounded-xl border-[rgba(231,231,241,1)] border-solid max-md:mt-8 max-md:px-5">
      <div className="flex items-stretch gap-4 text-2xl text-[rgba(18,18,36,1)] font-bold whitespace-nowrap">
        <img
          src={icon}
          className="aspect-[1] object-contain w-12 shrink-0 rounded-lg"
          alt={`${title} icon`}
        />
        <div className="my-auto">{title}</div>
      </div>
      <div className="text-base leading-6 self-stretch mt-[26px]">
        {description}
      </div>
      {features.map((feature, index) => (
        <FeatureItem key={index} icon={feature.icon} text={feature.text} />
      ))}
    </div>
  );
};
