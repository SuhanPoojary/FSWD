
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { t } from "../../utils/translations";

const HeroSection = () => {
  const { currentLanguage } = useLanguage();

  return (
    <section className="bg-[#004A57] py-16 md:py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              {t('hero.title', currentLanguage.code)}
            </h1>
            <p className="text-white text-xl mb-8">
              {t('hero.subtitle', currentLanguage.code)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/login?role=worker"
                className="bg-[#FF4B55] text-white font-medium px-8 py-3 rounded-lg text-center hover:bg-[#e53e49] transition-colors"
              >
                {t('hero.findWork', currentLanguage.code)}
              </Link>
              <Link
                to="/login?role=contractor"
                className="border border-white text-white px-8 py-3 rounded-lg text-center hover:bg-white hover:text-[#004A57] transition-colors"
              >
                {t('hero.postJob', currentLanguage.code)}
              </Link>
            </div>
            <Link
              to="/journey"
              className="inline-flex items-center gap-2 text-white mt-6 hover:underline"
            >
              {t('hero.learnMore', currentLanguage.code)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/lovable-uploads/9a9ec47f-9e06-4682-9ecf-5a5110bff90e.png"
              alt="Construction worker"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
