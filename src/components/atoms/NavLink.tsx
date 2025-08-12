// src/components/atoms/NavLink.tsx
import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

export default function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-cream hover:text-khaki-light transition-colors duration-200"
    >
      {label}
    </Link>
  );
}
