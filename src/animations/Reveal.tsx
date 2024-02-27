import { motion } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
};

const Reveal = ({ children }: RevealProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, translateY: 90 },
        visible: { opacity: 1, translateY: 0 },
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
