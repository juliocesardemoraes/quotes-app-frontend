import { motion } from "framer-motion";

const sentenceVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Loading({ text, ...rest }: { text: string }) {
  return (
    <motion.p
      key={text}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      className="text-xl flex space-x-1"
      {...rest}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}
