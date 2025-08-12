import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
};

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  const styles = {
    primary: "bg-brown-dark text-cream hover:bg-brown-dark",
    secondary: "bg-khaki text-brown hover:bg-khaki-light",
    accent: "bg-[#CC9544] text-black hover:bg-cream-light",
  };

  return (
    <button
      onClick={onClick}
      className={`${styles[variant]} px-6 py-3 rounded-lg font-medium transition`}
    >
      {children}
    </button>
  );
}
