import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00353F] px-8 py-16">
      <div className="flex justify-between items-center flex-wrap gap-10 mb-20">
        <div className="flex flex-col gap-2">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id='194:1305' layer-name='Icon' width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' class='footer-icon' style='width: 32px; height: 32px'> <path d='M22.25 4C19.6688 4 17.4088 5.11 16 6.98625C14.5912 5.11 12.3313 4 9.75 4C7.69528 4.00232 5.72539 4.81958 4.27248 6.27248C2.81958 7.72539 2.00232 9.69528 2 11.75C2 20.5 14.9738 27.5825 15.5262 27.875C15.6719 27.9533 15.8346 27.9943 16 27.9943C16.1654 27.9943 16.3281 27.9533 16.4737 27.875C17.0262 27.5825 30 20.5 30 11.75C29.9977 9.69528 29.1804 7.72539 27.7275 6.27248C26.2746 4.81958 24.3047 4.00232 22.25 4ZM16 25.85C13.7175 24.52 4 18.4613 4 11.75C4.00198 10.2256 4.60842 8.76423 5.68633 7.68633C6.76423 6.60842 8.22561 6.00198 9.75 6C12.1812 6 14.2225 7.295 15.075 9.375C15.1503 9.55841 15.2785 9.71528 15.4432 9.82569C15.6079 9.93609 15.8017 9.99503 16 9.99503C16.1983 9.99503 16.3921 9.93609 16.5568 9.82569C16.7215 9.71528 16.8497 9.55841 16.925 9.375C17.7775 7.29125 19.8188 6 22.25 6C23.7744 6.00198 25.2358 6.60842 26.3137 7.68633C27.3916 8.76423 27.998 10.2256 28 11.75C28 18.4513 18.28 24.5188 16 25.85Z' fill='white'></path> </svg>",
              }}
            />
          </div>
          <div className="text-[#EEE] text-sm">Labour Hub</div>
          <div className="text-white text-xs">All rights reserved 2024</div>
        </div>
        <div className="flex gap-8">
          <div className="text-[#EEE] text-sm">@BuilderConnect</div>
          <div className="text-[#EEE] text-sm">@BuilderConnect</div>
          <div className="text-[#EEE] text-sm">@BuilderConnect</div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-8 max-sm:flex-col max-sm:gap-6">
        <div className="text-[#EEE] text-lg">LabourNet</div>
        <nav className="flex gap-8 max-sm:flex-col max-sm:items-center">
          <a href="#about" className="text-[#EEE] text-lg hover:text-white">
            About Us
          </a>
          <a href="#work" className="text-[#EEE] text-lg hover:text-white">
            Our Work
          </a>
          <a href="#linkedin" className="text-[#EEE] text-lg hover:text-white">
            LinkedIn
          </a>
          <a href="#contact" className="text-[#EEE] text-lg hover:text-white">
            Contact Us
          </a>
        </nav>
        <div className="flex gap-3">
          <a href="#facebook" aria-label="Facebook">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id='194:1323' layer-name='Icon / Facebook' width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' class='social-icon' style='width: 24px; height: 24px'> <path d='M22 12.8038C22 7.24719 17.5229 2.74268 12 2.74268C6.47715 2.74268 2 7.24719 2 12.8038C2 17.8255 5.65684 21.9879 10.4375 22.7427V15.7121H7.89844V12.8038H10.4375V10.5872C10.4375 8.06564 11.9305 6.6728 14.2146 6.6728C15.3088 6.6728 16.4531 6.86931 16.4531 6.86931V9.34529H15.1922C13.95 9.34529 13.5625 10.1209 13.5625 10.9166V12.8038H16.3359L15.8926 15.7121H13.5625V22.7427C18.3432 21.9879 22 17.8257 22 12.8038Z' fill='white'></path> </svg>",
              }}
            />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id='194:1325' layer-name='Icon / Instagram' width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' class='social-icon' style='width: 24px; height: 24px'> <path fill-rule='evenodd' clip-rule='evenodd' d='M16 3.74268H8C5.23858 3.74268 3 5.98126 3 8.74268V16.7427C3 19.5041 5.23858 21.7427 8 21.7427H16C18.7614 21.7427 21 19.5041 21 16.7427V8.74268C21 5.98126 18.7614 3.74268 16 3.74268ZM19.25 16.7427C19.2445 18.5353 17.7926 19.9872 16 19.9927H8C6.20735 19.9872 4.75549 18.5353 4.75 16.7427V8.74268C4.75549 6.95003 6.20735 5.49817 8 5.49268H16C17.7926 5.49817 19.2445 6.95003 19.25 8.74268V16.7427ZM16.75 8.99268C17.3023 8.99268 17.75 8.54496 17.75 7.99268C17.75 7.4404 17.3023 6.99268 16.75 6.99268C16.1977 6.99268 15.75 7.4404 15.75 7.99268C15.75 8.54496 16.1977 8.99268 16.75 8.99268ZM12 8.24268C9.51472 8.24268 7.5 10.2574 7.5 12.7427C7.5 15.228 9.51472 17.2427 12 17.2427C14.4853 17.2427 16.5 15.228 16.5 12.7427C16.5027 11.5484 16.0294 10.4022 15.2925 9.84267C14.5556 9.28313 13.5951 9.01679 12.75 9.01679C11.4809 9.01679 10.5 10.1076 10.5 11.2427C10.5 12.3778 11.4809 13.4687 12.75 13.4687C13.7359 13.4687 14.4375 12.7661 14.4375 11.7427C14.4375 10.7193 13.7359 9.99268 12.75 9.99268C12.1977 9.99268 11.75 10.4404 11.75 11.2427C11.75 11.794 12.1977 12.2427 12.75 12.2427Z' fill='white'></path> </svg>",
              }}
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center gap-8 text-[#EEE] text-sm mt-6">
        <a href="#privacy-policy" className="hover:text-white">
          Privacy Policy
        </a>
        <a href="#terms" className="hover:text-white">
          Terms & Conditions
        </a>
        <a href="#cookies" className="hover:text-white">
          Cookies
        </a>
      </div>
    </footer>
  );
};

export default Footer;
