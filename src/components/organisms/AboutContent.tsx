"use client";

import SectionTitle from "../atoms/SectionTitle";
import Paragraph from "../atoms/Paragraph";

export default function AboutContent() {
  return (
    <div className="flex flex-col justify-center py-24 px-24 bg-brown-dark gap-4" id="about">
      <SectionTitle className="text-khaki-light text-center">About Us</SectionTitle>
      <Paragraph className="text-khaki-light text-center">
        At Jeeva Dermatology & Aesthetic Clinic, we believe that every person deserves to feel renewed—inside and out. <br />
        Jeeva means “new life,” and that’s exactly what we bring to you: a fresh start for your skin, beauty, and confidence.
      </Paragraph>
      <Paragraph className="text-khaki-light text-center">
        With expert dermatologists, advanced aesthetic technology, and personalized care, we provide solutions that go beyond the surface. <br />
        Whether you seek healthier skin, anti-aging treatments, or a confidence boost, Jeeva is here to guide your transformation.
      </Paragraph>
    </div>
  );
}
