import React from "react";
import { Button } from "/src/components/ui/button";

const GallerySection = () => {
  const images = [
    {
      id: 10,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/3be0b3079fd18b0a95448c603b780a4bc8cfea28",
    },
    {
      id: 11,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/956858f46363c2f3bb190ed1edb2c29dfef02ac7",
    },
    {
      id: 12,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/7620df56663cf441c3a880b3e0ce045396f6bfe0",
    },
    {
      id: 13,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0c7827534a7a76ebac2d6e59096a6e099061315",
    },
    {
      id: 20,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/86e866623233f7aafcf0555c7082b127b7e1bcd0",
    },
    {
      id: 21,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/8028d04c232b99fbdedc6068f12ff347d67b1a40",
    },
  ];

  return (
    <section className="flex gap-16 flex-wrap bg-[#EDEEF1] px-6 py-28 max-md:flex-col">
      <div className="flex flex-wrap gap-2 flex-1 min-w-[365px] p-2">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt=""
            className="flex-1 min-w-40 h-[171px] object-cover rounded-[48px]"
          />
        ))}
      </div>
      <div className="flex flex-col gap-8 flex-1 min-w-[400px]">
        <h2 className="text-black text-[56px] leading-[67.2px]">
          Join the Builder Revolution
        </h2>
        <p className="text-black text-lg leading-[27px]">
          We provide the tools and connections you need to thrive.
        </p>
        <Button variant="primary" shape="pill" className="self-start">
          Get Involved
        </Button>
      </div>
    </section>
  );
};

export default GallerySection;
