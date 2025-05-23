'use client';

import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

const Logo = ({ className = "", size = "md", showTagline = false }: LogoProps) => {
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <h1 className={`font-bold ${sizes[size]} text-medical-primary`}>
        Swasthya Health
      </h1>
      {/* {showTagline && (
        <p className="text-xs text-gray-500">Expert Surgical Consultations</p>
      )} */}
    </Link>
  );
};

export default Logo;
