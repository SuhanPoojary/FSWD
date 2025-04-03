import React from "react";
import { Card } from "../../components/ui/Card";

const AchievementsSection = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eb8e820741be79728389c237efcfefb0cd86edf0",
      tag: "Building Together",
      title: "Your Projects, Our Passion",
      description: "Discover tools and resources tailored for you.",
      action: "Join Us Now",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fb316d4f9792a69e969ea4b171857739354c0efe",
      tag: "Crafting Success",
      title: "Unlock Your Potential",
      description: "Connect with industry leaders and opportunities.",
      action: "Get Started Today",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/06da1176c664417340dd4990f3fa81ef1340df7a",
      tag: "Your Success, Our Mission",
      title: "Building a Better Future",
      description: "Innovative solutions for every project.",
      action: "Learn More",
    },
  ];

  return (
    <section className="bg-[#EDEEF1] px-8 py-[120px]">
      <div className="max-w-[800px] mb-10">
        <h2 className="text-black text-[56px] leading-[67.2px] max-sm:text-4xl">
          Explore Our Achievements
        </h2>
        <p className="text-black text-lg leading-[27px]">
          See how we support builders and contractors.
        </p>
      </div>
      <div className="flex justify-center gap-6 flex-wrap max-md:flex-col">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            tag={card.tag}
            title={card.title}
            description={card.description}
            action={card.action}
          />
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
