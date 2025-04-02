import React from "react";

export const PageHeader = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="text-[rgba(18,18,36,1)] text-4xl font-bold text-center">
        {title}
      </h1>
      <p className="text-[rgba(113,123,158,1)] text-xl font-normal text-center mt-4">
        {subtitle}
      </p>
    </>
  );
};
