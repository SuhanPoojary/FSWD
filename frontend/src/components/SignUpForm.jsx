
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const SignUpForm = ({
  title,
  emailLabel = "Email Address",
  emailPlaceholder = "your@email.com",
  showPasswordToggle = false,
  actionButtonText = "Sign Up",
  alternateActionText = "Already have an account?",
  alternateActionLink = "/login",
  alternateActionLinkText = "Login",
  socialLogins = ["google", "apple"],
  supportLink = false,
  redirectPath = "/",
  role
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!agreeTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    console.log({ email, password, fullName, agreeTerms, role });
    toast.success("Account created successfully");
    
    // Save user data to local storage for demo purposes
    const userData = {
      email,
      fullName,
      role,
      createdAt: new Date().toISOString()
    };
    
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate(redirectPath);
  };

  const handleSocialSignUp = (provider) => {
    toast.info(`Signing up with ${provider}...`);
    setTimeout(() => {
      const userData = {
        email: `user@${provider}.com`,
        fullName: "Social User",
        role,
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate(redirectPath);
    }, 1500);
  };

  return (
    <div className="w-full">
      <h2 className="text-[#121224] text-2xl font-bold mb-4">{title}</h2>
      <p className="text-[#717B9E] text-sm mb-6">
        Create your account to get started with LabourNet
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm text-[#121224]">
            Full Name
          </label>
          <Input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Smith"
            required
            className="w-full focus:border-[#FF4B55] hover:border-[#FF4B55] transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-[#121224]">
            {emailLabel}
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailPlaceholder}
            required
            className="w-full focus:border-[#FF4B55] hover:border-[#FF4B55] transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm text-[#121224]">
            Password
          </label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full pr-10 focus:border-[#FF4B55] hover:border-[#FF4B55] transition-colors"
            />
            {showPasswordToggle && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm text-[#121224]">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full focus:border-[#FF4B55] hover:border-[#FF4B55] transition-colors"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={agreeTerms}
            onCheckedChange={(checked) => setAgreeTerms(checked)}
          />
          <label
            htmlFor="terms"
            className="text-sm text-[#717B9E] cursor-pointer"
          >
            I agree to the <Link to="/terms" className="text-[#FF4B55] hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-[#FF4B55] hover:underline">Privacy Policy</Link>
          </label>
        </div>

        <Button type="submit" className="w-full bg-[#FF4B55] hover:bg-[#E43F49] text-white">
          {actionButtonText}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-[#717B9E] text-sm">
          {alternateActionText} <Link to={alternateActionLink} className="text-[#FF4B55] hover:underline">{alternateActionLinkText}</Link>
        </p>
      </div>

      {socialLogins.length > 0 && (
        <div className="mt-6">
          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-200 w-full absolute"></div>
            <span className="bg-white px-2 text-sm text-[#717B9E] relative">Or sign up with</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {socialLogins.map((provider) => (
              <button 
                key={provider} 
                onClick={() => handleSocialSignUp(provider)} 
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-300 rounded py-2 px-4 text-sm hover:bg-gray-50 hover:border-[#FF4B55] transition-colors"
              >
                {provider}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
