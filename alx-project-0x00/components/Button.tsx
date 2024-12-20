
import React from "react";

interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  // Additional optional styles prop for further customization
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, size, shape, className }) => {
  // Define button size classes
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  // Define button shape classes
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  // Combine classes based on props
  const buttonClasses = `${sizeClasses[size]} ${shapeClasses[shape]} ${className}`;

  return (
    <button className={`bg-blue-500 text-white ${buttonClasses} hover:bg-blue-700 transition duration-300`}>
      {title}
    </button>
  );
};

export default Button;
