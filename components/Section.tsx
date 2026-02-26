import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  delay?: number;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, delay = 0, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
