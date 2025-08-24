
import IconLink from "../atoms/IconLinks";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <IconLink href="https://instagram.com/jeevaclinic.id" icon={<FaInstagram />} label="Instagram" />
      <IconLink href="https://wa.me/6281958117778" icon={<FaWhatsapp />} label="WhatsApp" />
    </div>
  );
}
