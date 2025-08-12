"use client";

import { motion } from "framer-motion";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export default function Paragraph({ children, className = "" }: ParagraphProps) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className={`text-base md:text-lg leading-relaxed ${className}`.trim()}
    >
      {children}
    </motion.p>
  );
}
