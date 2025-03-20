
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

interface LoginFormProps {
  title: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  showRememberMe?: boolean;
  showPasswordToggle?: boolean;
  actionButtonText?: string;
  alternateActionText?: string;
  alternateActionLink?: string;
  alternateActionLinkText?: string;
  socialLogins?: Array<"google" | "apple" | "microsoft">;
  supportLink?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
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
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    // Handle login logic here
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
            className="w-full"
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
              className="w-full pr-10"
            />
            {showPasswordToggle && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={18} className="text-gray-500" />
                ) : (
                  <Eye size={18} className="text-gray-500" />
                )}
              </button>
            )}
          </div>
        </div>

        {showRememberMe && (
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => 
                setRememberMe(checked as boolean)
              }
            />
            <label
              htmlFor="remember"
              className="text-sm text-[#717B9E] cursor-pointer"
            >
              Remember me
            </label>
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-[#FF4B55] hover:bg-[#E43F49] text-white"
        >
          {actionButtonText}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-[#717B9E] text-sm">
          {alternateActionText}{" "}
          <Link
            to={alternateActionLink}
            className="text-[#FF4B55] hover:underline"
          >
            {alternateActionLinkText}
          </Link>
        </p>
      </div>

      {socialLogins && socialLogins.length > 0 && (
        <div className="mt-6">
          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-200 w-full absolute"></div>
            <span className="bg-white px-2 text-sm text-[#717B9E] relative">
              Or continue with
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {socialLogins.includes("google") && (
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded py-2 px-4 text-sm hover:bg-gray-50">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" fill="#737373" />
                </svg>
                Google
              </button>
            )}
            {socialLogins.includes("apple") && (
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded py-2 px-4 text-sm hover:bg-gray-50">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" fill="#737373" />
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" fill="#737373" />
                </svg>
                Apple
              </button>
            )}
            {socialLogins.includes("microsoft") && (
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded py-2 px-4 text-sm hover:bg-gray-50">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.5H0V16h7.462V8.5zM16 8.5H8.538V16H16V8.5z" fill="#737373" />
                </svg>
                Microsoft
              </button>
            )}
          </div>
        </div>
      )}

      <div className="mt-6 text-center text-xs text-[#717B9E]">
        By signing in, you agree to our{" "}
        <Link to="/terms" className="text-[#FF4B55] hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link to="/privacy" className="text-[#FF4B55] hover:underline">
          Privacy Policy
        </Link>
      </div>

      {supportLink && (
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-1 text-xs text-[#717B9E]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14C4.7 14 2 11.3 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14Z"
                fill="#717B9E"
              />
              <path
                d="M8 4C7.4 4 7 4.4 7 5C7 5.6 7.4 6 8 6C8.6 6 9 5.6 9 5C9 4.4 8.6 4 8 4Z"
                fill="#717B9E"
              />
              <path
                d="M8 7C7.4 7 7 7.4 7 8V11C7 11.6 7.4 12 8 12C8.6 12 9 11.6 9 11V8C9 7.4 8.6 7 8 7Z"
                fill="#717B9E"
              />
            </svg>
            Need help? Contact our{" "}
            <Link to="/support" className="text-[#FF4B55] hover:underline">
              support team
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
