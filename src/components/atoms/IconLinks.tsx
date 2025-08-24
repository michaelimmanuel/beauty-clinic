import { ReactNode } from "react";

type IconLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

export default function IconLink({ href, icon, label }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-khaki-light transition-colors text-lg"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}