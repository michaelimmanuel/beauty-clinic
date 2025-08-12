"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-black">
    
        <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
        >
            <Image
            src="/images/hero.jpg"
            alt="Beauty Clinic"
            fill
            priority
            className="object-cover"
            />
        </motion.div>
        
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-cream mb-4"
        >
          Discover Your Best Self
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-khaki-light max-w-2xl mb-8"
        >
          Experience luxury skincare and beauty treatments in a calm and welcoming environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="primary">Book Appointment</Button>
        </motion.div>
      </div>
    </section>
  );
}
