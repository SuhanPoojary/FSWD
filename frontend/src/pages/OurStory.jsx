import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeader } from "@/components/PageHeader";

const OurStory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-[#EDEEF1]">
        <PageHeader
          title="Our Story"
          subtitle="Learn about LabourNet's mission to revolutionize the construction industry"
        />

        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#004A57] mb-6">
              About Us – LabourNet
            </h2>

            <p className="mb-6 text-gray-700 leading-relaxed">
              At LabourNet, we are revolutionizing the construction industry by
              seamlessly connecting builders, contractors, and workers through a
              smart, digital platform. Our goal is to streamline hiring, enhance
              workforce management, and accelerate project execution, ensuring that
              skilled professionals find the right opportunities effortlessly.
            </p>

            <p className="mb-8 text-gray-700 leading-relaxed">
              We recognize the challenges in the industry—builders struggle to hire
              skilled workers, contractors lack a structured way to showcase their
              expertise, and workers often face difficulty in securing jobs.
              LabourNet bridges this gap by providing a transparent, efficient, and
              reliable solution to match talent with projects, reducing delays and
              improving overall productivity.
            </p>

            <h3 className="text-xl font-bold text-[#004A57] mb-4">What We Offer</h3>
            <ul className="list-none space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✅</span>
                <span className="text-gray-700">
                  <span className="font-semibold">For Builders:</span> Quickly find
                  and hire skilled contractors and workers for projects.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✅</span>
                <span className="text-gray-700">
                  <span className="font-semibold">For Contractors:</span> Showcase
                  portfolios, secure projects, and hire reliable workers.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✅</span>
                <span className="text-gray-700">
                  <span className="font-semibold">For Workers:</span> Register,
                  display skills, and access job opportunities with ease.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✅</span>
                <span className="text-gray-700">
                  <span className="font-semibold">Seamless Communication:</span>{" "}
                  Secure in-app messaging for real-time collaboration.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✅</span>
                <span className="text-gray-700">
                  <span className="font-semibold">Ratings & Reviews:</span> Build
                  trust and credibility through verified feedback.
                </span>
              </li>
            </ul>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#004A57] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed bg-[#f8f9fa] p-4 rounded-lg border-l-4 border-[#004A57]">
                To create a digitally empowered construction workforce ecosystem
                that fosters efficiency, trust, and sustainable growth across the
                industry.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#004A57] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed bg-[#f8f9fa] p-4 rounded-lg border-l-4 border-[#FF4B55]">
                To simplify hiring, optimize project execution, and provide fair
                job access through innovative technology—ensuring that every
                professional in the construction sector thrives.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[#004A57] mb-6">Meet Our Team</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Our team at LabourNet is driven by a passion for innovation and
              industry transformation. We bring together experts from technology,
              construction, and workforce management to build a solution that truly
              benefits all stakeholders in the construction sector.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
                  <span className="text-2xl font-bold text-gray-400">SN</span>
                </div>
                <h3 className="text-lg font-semibold text-[#004A57]">Sohan Nagothi</h3>
                <p className="text-sm text-gray-500">Co-founder</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
                  <span className="text-2xl font-bold text-gray-400">SP</span>
                </div>
                <h3 className="text-lg font-semibold text-[#004A57]">Suhan Poojary</h3>
                <p className="text-sm text-gray-500">Co-founder</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
                  <span className="text-2xl font-bold text-gray-400">MM</span>
                </div>
                <h3 className="text-lg font-semibold text-[#004A57]">Manas Mungekar</h3>
                <p className="text-sm text-gray-500">Co-founder</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
                  <span className="text-2xl font-bold text-gray-400">YS</span>
                </div>
                <h3 className="text-lg font-semibold text-[#004A57]">Yash Sharma</h3>
                <p className="text-sm text-gray-500">Co-founder</p>
              </div>
            </div>

            <p className="mt-8 text-gray-700 leading-relaxed">
              We are dedicated to making LabourNet the go-to platform for hiring and
              workforce solutions in the construction industry. Join us in
              redefining how the industry connects, collaborates, and grows!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
