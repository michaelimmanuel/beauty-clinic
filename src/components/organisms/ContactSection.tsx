// src/components/organisms/ContactSection.tsx
import SectionTitle from "../atoms/SectionTitle";
import Paragraph from "../atoms/Paragraph";
import ContactInfo from "../molecules/ContactInfo";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-green-dark text-white">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Contact Info */}
        <div>
          <SectionTitle>Contact Us</SectionTitle>
          <Paragraph className="mt-4 text-khaki-light">
            Reach us through our social media or visit our clinic location below.
          </Paragraph>
          <div className="mt-6">
            <ContactInfo />
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9758375286333!2d106.61917059999999!3d-6.266908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fde118377031%3A0xbedac55954c7c4e3!2sJeeva%20Clinic!5e0!3m2!1sen!2sid!4v1756042917177!5m2!1sen!2sid" width="600" height="450" loading="lazy" ></iframe>
        </div>
      </div>
    </section>
  );
}
