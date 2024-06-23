'use client';
import { motion } from 'framer-motion';

const SpringFromLeft = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ delay: 0.33, type: 'spring', stiffness: 220 }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default SpringFromLeft;
