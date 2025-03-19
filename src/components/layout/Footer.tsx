import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00353F] px-8 py-16">
      <div className="flex justify-between items-center flex-wrap gap-10 mb-20">
        <div className="flex flex-col gap-2">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;194:1305&quot; layer-name=&quot;Icon&quot; width=&quot;32&quot; height=&quot;32&quot; viewBox=&quot;0 0 32 32&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;footer-icon&quot; style=&quot;width: 32px; height: 32px&quot;> <path d=&quot;M22.25 4C19.6688 4 17.4088 5.11 16 6.98625C14.5912 5.11 12.3313 4 9.75 4C7.69528 4.00232 5.72539 4.81958 4.27248 6.27248C2.81958 7.72539 2.00232 9.69528 2 11.75C2 20.5 14.9738 27.5825 15.5262 27.875C15.6719 27.9533 15.8346 27.9943 16 27.9943C16.1654 27.9943 16.3281 27.9533 16.4737 27.875C17.0262 27.5825 30 20.5 30 11.75C29.9977 9.69528 29.1804 7.72539 27.7275 6.27248C26.2746 4.81958 24.3047 4.00232 22.25 4ZM16 25.85C13.7175 24.52 4 18.4613 4 11.75C4.00198 10.2256 4.60842 8.76423 5.68633 7.68633C6.76423 6.60842 8.22561 6.00198 9.75 6C12.1812 6 14.2225 7.295 15.075 9.375C15.1503 9.55841 15.2785 9.71528 15.4432 9.82569C15.6079 9.93609 15.8017 9.99503 16 9.99503C16.1983 9.99503 16.3921 9.93609 16.5568 9.82569C16.7215 9.71528 16.8497 9.55841 16.925 9.375C17.7775 7.29125 19.8188 6 22.25 6C23.7744 6.00198 25.2358 6.60842 26.3137 7.68633C27.3916 8.76423 27.998 10.2256 28 11.75C28 18.4513 18.28 24.5188 16 25.85Z&quot; fill=&quot;white&quot;></path> </svg>",
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
                  "<svg id=&quot;194:1323&quot; layer-name=&quot;Icon / Facebook&quot; width=&quot;24&quot; height=&quot;25&quot; viewBox=&quot;0 0 24 25&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;social-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <path d=&quot;M22 12.8038C22 7.24719 17.5229 2.74268 12 2.74268C6.47715 2.74268 2 7.24719 2 12.8038C2 17.8255 5.65684 21.9879 10.4375 22.7427V15.7121H7.89844V12.8038H10.4375V10.5872C10.4375 8.06564 11.9305 6.6728 14.2146 6.6728C15.3088 6.6728 16.4531 6.86931 16.4531 6.86931V9.34529H15.1922C13.95 9.34529 13.5625 10.1209 13.5625 10.9166V12.8038H16.3359L15.8926 15.7121H13.5625V22.7427C18.3432 21.9879 22 17.8257 22 12.8038Z&quot; fill=&quot;white&quot;></path> </svg>",
              }}
            />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;194:1325&quot; layer-name=&quot;Icon / Instagram&quot; width=&quot;24&quot; height=&quot;25&quot; viewBox=&quot;0 0 24 25&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;social-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M16 3.74268H8C5.23858 3.74268 3 5.98126 3 8.74268V16.7427C3 19.5041 5.23858 21.7427 8 21.7427H16C18.7614 21.7427 21 19.5041 21 16.7427V8.74268C21 5.98126 18.7614 3.74268 16 3.74268ZM19.25 16.7427C19.2445 18.5353 17.7926 19.9872 16 19.9927H8C6.20735 19.9872 4.75549 18.5353 4.75 16.7427V8.74268C4.75549 6.95003 6.20735 5.49817 8 5.49268H16C17.7926 5.49817 19.2445 6.95003 19.25 8.74268V16.7427ZM16.75 8.99268C17.3023 8.99268 17.75 8.54496 17.75 7.99268C17.75 7.4404 17.3023 6.99268 16.75 6.99268C16.1977 6.99268 15.75 7.4404 15.75 7.99268C15.75 8.54496 16.1977 8.99268 16.75 8.99268ZM12 8.24268C9.51472 8.24268 7.5 10.2574 7.5 12.7427C7.5 15.228 9.51472 17.2427 12 17.2427C14.4853 17.2427 16.5 15.228 16.5 12.7427C16.5027 11.5484 16.0294 10.4022 15.1849 9.55776C14.3404 8.71327 13.1943 8.24002 12 8.24268ZM9.25 12.7427C9.25 14.2615 10.4812 15.4927 12 15.4927C13.5188 15.4927 14.75 14.2615 14.75 12.7427C14.75 11.2239 13.5188 9.99268 12 9.99268C10.4812 9.99268 9.25 11.2239 9.25 12.7427Z&quot; fill=&quot;white&quot;></path> </svg>",
              }}
            />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;194:1327&quot; layer-name=&quot;Icon / X&quot; width=&quot;24&quot; height=&quot;25&quot; viewBox=&quot;0 0 24 25&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;social-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <path d=&quot;M17.1761 4.74268H19.9362L13.9061 11.5201L21 20.7427H15.4456L11.0951 15.1493L6.11723 20.7427H3.35544L9.80517 13.4935L3 4.74268H8.69545L12.6279 9.8553L17.1761 4.74268ZM16.2073 19.1181H17.7368L7.86441 6.28196H6.2232L16.2073 19.1181Z&quot; fill=&quot;white&quot;></path> </svg>",
              }}
            />
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;194:1329&quot; layer-name=&quot;Icon / LinkedIn&quot; width=&quot;24&quot; height=&quot;25&quot; viewBox=&quot;0 0 24 25&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;social-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M4.5 3.74268C3.67157 3.74268 3 4.41425 3 5.24268V20.2427C3 21.0711 3.67157 21.7427 4.5 21.7427H19.5C20.3284 21.7427 21 21.0711 21 20.2427V5.24268C21 4.41425 20.3284 3.74268 19.5 3.74268H4.5ZM8.52076 7.7454C8.52639 8.70165 7.81061 9.29087 6.96123 9.28665C6.16107 9.28243 5.46357 8.6454 5.46779 7.74681C5.47201 6.90165 6.13998 6.22243 7.00764 6.24212C7.88795 6.26181 8.52639 6.90728 8.52076 7.7454ZM12.2797 10.5044H9.75971H9.7583V19.0643H12.4217V18.8646C12.4217 18.4847 12.4214 18.1047 12.4211 17.7246C12.4203 16.7108 12.4194 15.6959 12.4246 14.6824C12.426 14.4363 12.4372 14.1804 12.5005 13.9455C12.7381 13.068 13.5271 12.5013 14.4074 12.6406C14.9727 12.7291 15.3467 13.0568 15.5042 13.5898C15.6013 13.923 15.6449 14.2816 15.6491 14.629C15.6605 15.6766 15.6589 16.7242 15.6573 17.7719C15.6567 18.1417 15.6561 18.5117 15.6561 18.8815V19.0629H18.328V18.8576C18.328 18.4056 18.3278 17.9537 18.3275 17.5018C18.327 16.3723 18.3264 15.2428 18.3294 14.1129C18.3308 13.6024 18.276 13.099 18.1508 12.6054C17.9638 11.8713 17.5771 11.2638 16.9485 10.8251C16.5027 10.5129 16.0133 10.3118 15.4663 10.2893C15.404 10.2867 15.3412 10.2833 15.2781 10.2799C14.9984 10.2648 14.7141 10.2494 14.4467 10.3033C13.6817 10.4566 13.0096 10.8068 12.5019 11.4241C12.4429 11.4949 12.3852 11.5668 12.2991 11.6741L12.2797 11.6984V10.5044ZM5.68164 19.0671H8.33242V10.51H5.68164V19.0671Z&quot; fill=&quot;white&quot;></path> </svg>",
              }}
            />
          </a>
          <a href="#youtube" aria-label="YouTube">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;194:1331&quot; layer-name=&quot;Icon / Youtube&quot; width=&quot;24&quot; height=&quot;25&quot; viewBox=&quot;0 0 24 25&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;social-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <path d=&quot;M21.5931 7.70301C21.4792 7.28041 21.2566 6.89501 20.9475 6.58518C20.6383 6.27534 20.2534 6.05187 19.8311 5.93701C18.2651 5.50701 12.0001 5.50001 12.0001 5.50001C12.0001 5.50001 5.73609 5.49301 4.16909 5.90401C3.74701 6.02415 3.36291 6.25078 3.05365 6.56214C2.7444 6.8735 2.52037 7.25913 2.40309 7.68201C1.99009 9.24801 1.98609 12.496 1.98609 12.496C1.98609 12.496 1.98209 15.76 2.39209 17.31C2.62209 18.167 3.29709 18.844 4.15509 19.075C5.73709 19.505 11.9851 19.512 11.9851 19.512C11.9851 19.512 18.2501 19.519 19.8161 19.109C20.2386 18.9943 20.6238 18.7714 20.9337 18.4622C21.2436 18.153 21.4675 17.7682 21.5831 17.346C21.9971 15.781 22.0001 12.534 22.0001 12.534C22.0001 12.534 22.0201 9.26901 21.5931 7.70301ZM9.99609 15.505L10.0011 9.50501L15.2081 12.51L9.99609 15.505Z&quot; fill=&quot;white&quot;></path> </svg>",
              }}
            />
          </a>
        </div>
      </div>
      <div className="text-center">
        <div className="h-px bg-[#EEE] mb-8" />
        <div className="flex justify-center items-center gap-6 flex-wrap max-sm:flex-col">
          <div className="text-[#EEE] text-sm">
            2024 LabourNet. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="text-[#EEE] text-sm hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="text-[#EEE] text-sm hover:text-white">
              Terms of Service
            </a>
            <a href="#cookies" className="text-[#EEE] text-sm hover:text-white">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
