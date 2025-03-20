import { motion } from "framer-motion";

const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

export default function Typewriter({ text, ...rest }: { text: string }) {
  return (
    <motion.p
      key={text}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      {...rest}
    >
      {text.split("").map((char, i) => (
        <motion.span
          className="text-xl"
          key={`${char}-${i}`}
          variants={letterVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}
