import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactForm from "@/components/ContactForm";
import NewsletterSignup from "@/components/NewsletterSignup";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        <HeroSection />
        <AchievementsSection />
        <GallerySection />

        <section className="bg-[#EDEEF1] px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-black text-4xl mb-8 text-center">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ContactForm />
              <div className="flex flex-col justify-center gap-6">
                <div>
                  <h3 className="text-black text-2xl mb-3">
                    Contact Information
                  </h3>
                  <p className="text-black mb-4">
                    Have questions or want to learn more about our services?
                    Reach out to us directly or fill out the form.
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">Email:</span>
                      <a
                        href="mailto:info@labournet.com"
                        className="text-[#004A57] hover:underline"
                      >
                        info@labournet.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">Phone:</span>
                      <a
                        href="tel:+1234567890"
                        className="text-[#004A57] hover:underline"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">Address:</span>
                      <span>123 Builder Street, Construction City</span>
                    </div>
                  </div>
                </div>
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
