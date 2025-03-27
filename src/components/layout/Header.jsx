
import React from "react";
import LanguageSelector from "../LanguageSelector";
import { useLanguage } from "../../contexts/LanguageContext";
import { t } from "../../utils/translations";

const Header = () => {
  const { currentLanguage } = useLanguage();

  return (
    <header className="flex w-full justify-between items-center bg-[#00353F] p-2">
      <div className="text-[#EEE] text-base px-2 py-0">LabourNet</div>
      <nav className="flex items-center gap-4 max-sm:hidden">
        <a href="#dashboard" className="text-[#EEE] text-xs px-4 py-0">
          {t('header.dashboard', currentLanguage.code)}
        </a>
        <a href="#story" className="text-[#EEE] text-xs px-4 py-0">
          {t('header.story', currentLanguage.code)}
        </a>
        <a href="#marketplace" className="text-[#EEE] text-xs px-4 py-0">
          {t('header.marketplace', currentLanguage.code)}
        </a>
      </nav>
      <div className="text-white text-xs">
        <LanguageSelector />
      </div>
      <button className="border text-[#EEE] text-xs px-6 py-4 rounded-lg border-solid border-[#EEE] hover:bg-[#004A57] transition-colors">
        {t('header.getInTouch', currentLanguage.code)}
      </button>
    </header>
  );
};

export default Header;
