"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedProjectProps {
  children: ReactNode;
  index: number;
}

export function AnimatedProject({ children, index }: AnimatedProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
