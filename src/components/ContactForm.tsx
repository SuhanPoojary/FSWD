import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="bg-[#004A57] p-8 rounded-lg max-w-md mx-auto">
      <h3 className="text-[#EEE] text-2xl mb-6">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="text-[#EEE] text-sm block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#00353F] text-[#EEE] border border-[#EEE] focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-[#EEE] text-sm block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#00353F] text-[#EEE] border border-[#EEE] focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-[#EEE] text-sm block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-3 rounded bg-[#00353F] text-[#EEE] border border-[#EEE] focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
          />
        </div>
        <Button type="submit" variant="primary" className="mt-2">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
