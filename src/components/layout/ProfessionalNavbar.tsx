
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ProfessionalNavbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <header className="bg-[#004A57] text-white py-3 px-6 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
        <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex gap-6">
          <NavigationMenuItem>
            <Link 
              to="/professional-dashboard"
              className={cn(
                "text-white hover:text-[#FF4B55] transition-colors",
                currentPath === "/professional-dashboard" && "text-[#FF4B55]"
              )}
            >
              Dashboard
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link 
              to="/professional-projects"
              className={cn(
                "text-white hover:text-[#FF4B55] transition-colors",
                currentPath === "/professional-projects" && "text-[#FF4B55]"
              )}
            >
              Projects
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link 
              to="/professional-messages"
              className={cn(
                "text-white hover:text-[#FF4B55] transition-colors",
                currentPath === "/professional-messages" && "text-[#FF4B55]"
              )}
            >
              Messages
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link 
              to="/analytics"
              className={cn(
                "text-white hover:text-[#FF4B55] transition-colors",
                currentPath === "/analytics" && "text-[#FF4B55]"
              )}
            >
              Analytics
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <Link to="/professional-profile">
          <Avatar className="h-8 w-8 bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
};

export default ProfessionalNavbar;
