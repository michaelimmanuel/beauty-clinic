type HamburgerButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};

export default function HamburgerButton({ onClick, isOpen }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col gap-[5px] justify-center items-center md:hidden"
    >
      <span
        className={`block h-[3px] w-6 bg-cream rounded transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-[8px]" : ""
        }`}
      />
      <span
        className={`block h-[3px] w-6 bg-cream rounded transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-[3px] w-6 bg-cream rounded transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-[8px]" : ""
        }`}
      />
    </button>
  );
}
