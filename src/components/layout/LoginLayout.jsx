import React from "react";
import { Link } from "react-router-dom";

const LoginLayout = ({
  title,
  subtitle,
  stat1,
  stat2,
  testimonial,
  children,
}) => {
  return (
    <div className="flex min-h-screen">
      {/* Left panel - dark teal background */}
      <div className="w-1/2 bg-[#004A57] p-10 flex flex-col max-md:hidden">
        <div className="mb-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6">
              <img
                src="/LabourNet_logo.png"
                alt="LabourNet Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
        </div>

        <div className="mt-16">
          <h1 className="text-[#EEE] text-3xl font-bold mb-4">{title}</h1>
          <p className="text-[#EEE] text-base mb-8">{subtitle}</p>

          {/* Stats section */}
          {(stat1 || stat2) && (
            <div className="flex gap-6 mt-8">
              {stat1 && (
                <div className="bg-[#00353F] p-4 rounded-lg w-36">
                  <div className="text-[#FF4B55] font-bold text-2xl">
                    {stat1.value}
                  </div>
                  <div className="text-[#EEE] text-sm">{stat1.label}</div>
                </div>
              )}
              {stat2 && (
                <div className="bg-[#00353F] p-4 rounded-lg w-36">
                  <div className="text-[#FF4B55] font-bold text-2xl">
                    {stat2.value}
                  </div>
                  <div className="text-[#EEE] text-sm">{stat2.label}</div>
                </div>
              )}
            </div>
          )}

          {/* Testimonial */}
          {testimonial && (
            <div className="mt-16">
              <blockquote className="text-[#EEE] italic text-base">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <div className="text-[#EEE] font-medium">
                    {testimonial.author}
                  </div>
                  <div className="text-[#EEE] text-sm">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right panel - white background with form */}
      <div className="w-1/2 bg-white p-10 flex items-center justify-center max-md:w-full">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default LoginLayout;