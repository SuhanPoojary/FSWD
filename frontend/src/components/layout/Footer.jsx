import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00353F] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">LabourNet</h2>
          <p className="text-sm text-gray-300 mb-2">
            LabourNet is dedicated to empowering India's informal workforce by
            connecting skilled laborers with employers in need.
          </p>
          <p className="text-sm text-gray-300">
            We aim to create sustainable livelihoods by offering work
            opportunities, skill development, and transparent hiring platforms.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <div className="bg-[#014650] p-4 rounded space-y-2 text-sm">
            <div>
              <p className="text-gray-300">Email:</p>
              <p>support@labournet.com</p>
            </div>
            <div>
              <p className="text-gray-300">Phone:</p>
              <p>+91-92333 44455</p>
            </div>
            <div>
              <p className="text-gray-300">Location:</p>
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#work" className="hover:text-white">Our Work</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} LabourNet. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#privacy" className="hover:text-white">Privacy Policy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
          <a href="#cookies" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
