import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const LoginForm = ({
  title,
  emailLabel = "Email Address",
  emailPlaceholder = "your@email.com",
  showRememberMe = true,
  showPasswordToggle = false,
  actionButtonText = "Sign In",
  alternateActionText = "Don't have an account?",
  alternateActionLink = "/signup",
  alternateActionLinkText = "Sign up now",
  socialLogins = ["google", "apple"],
  supportLink = false,
  redirectPath = "/",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    toast.success("Successfully signed in");
    navigate(redirectPath);
  };

  const handleSocialLogin = (provider) => {
    toast.info(`Redirecting to ${provider} login...`);
    setTimeout(() => {
      navigate(redirectPath);
    }, 1500);
  };

  return (
    <div className="w-full">
      <h2 className="text-[#121224] text-2xl font-bold mb-4">{title}</h2>
      <p className="text-[#717B9E] text-sm mb-6">
        Enter your credentials to access your account
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="flex justify-between">
            <label htmlFor="password" className="text-sm text-[#121224]">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-[#FF4B55] hover:underline"
            >
              {showPasswordToggle ? "Reset password" : "Forgot password?"}
            </Link>
          </div>
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

        {showRememberMe && (
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked)}
            />
            <label
              htmlFor="remember"
              className="text-sm text-[#717B9E] cursor-pointer"
            >
              Remember me
            </label>
          </div>
        )}

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
            <span className="bg-white px-2 text-sm text-[#717B9E] relative">Or continue with</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {socialLogins.map((provider) => (
              <button key={provider} onClick={() => handleSocialLogin(provider)} className="flex items-center justify-center gap-2 border border-gray-300 rounded py-2 px-4 text-sm hover:bg-gray-50 hover:border-[#FF4B55] transition-colors">
                {provider}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
