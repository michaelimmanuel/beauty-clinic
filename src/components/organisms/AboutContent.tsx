"use client";

import SectionTitle from "../atoms/SectionTitle";
import Paragraph from "../atoms/Paragraph";

export default function AboutContent() {
  return (
    <div className="flex flex-col justify-center py-12 px-24 bg-brown-dark gap-4">
      <SectionTitle className="text-khaki-light text-center">About Us</SectionTitle>
      <Paragraph className="text-khaki-light text-justify">
        At Beauty Clinic, we believe that beauty is more than skin deep. Our
        dedicated team of professionals is committed to enhancing your natural
        beauty through personalized care and the latest treatments.
      </Paragraph>
      <Paragraph className="text-khaki-light text-justify">
        From skincare to rejuvenation therapies, we create an experience that
        leaves you refreshed, confident, and glowing.
      </Paragraph>
    </div>
  );
}
