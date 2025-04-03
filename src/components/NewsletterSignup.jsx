import React, { useState } from "react";
import { Button } from "../components/ui/button";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log("Newsletter signup:", email);
    setIsSubmitted(true);
    setEmail("");

    // Reset the success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-[#00353F] p-6 rounded-lg">
      <h3 className="text-[#EEE] text-xl mb-3">Stay Updated</h3>
      <p className="text-[#EEE] text-sm mb-4">
        Subscribe to our newsletter for the latest updates and opportunities.
      </p>

      {isSubmitted ? (
        <div className="text-green-400 text-sm py-2">
          Thank you for subscribing!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-grow p-2 rounded bg-[#002A33] text-[#EEE] border border-[#004A57] focus:outline-none focus:ring-1 focus:ring-[#FF4B55]"
          />
          <Button type="submit" variant="primary" size="sm">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
