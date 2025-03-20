import { AnimatePresence, motion } from "framer-motion";

export default function Loader({ isVisible }: { isVisible: boolean }) {
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.main
            className="flex flex-col justify-center items-center h-100"
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 1000, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="flex"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <h3 className="text-9xl">“</h3>
              <h3 className="text-9xl">”</h3>
            </motion.div>
            <h1 className="font-medium">Quotes</h1>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
