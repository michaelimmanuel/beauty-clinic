// src/components/molecules/NavMenu.tsx
import NavLink from "../atoms/NavLink";

type NavMenuProps = {
  onLinkClick?: () => void;
  vertical?: boolean;
};

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Our Service", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

export default function NavMenu({ onLinkClick, vertical = false }: NavMenuProps) {
  return (
    <nav className={vertical ? "flex flex-col gap-6" : "flex gap-6 items-center"}>
      {menuItems.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          onClick={onLinkClick}
        />
      ))}
    </nav>
  );
}
