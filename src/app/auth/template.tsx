"use client";

import { motion } from "framer-motion";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.div
      initial={{ x: 75, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "backInOut", duration: 0.5 }}
      exit={{ x: -75, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
