import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { fetchOneQuote } from "../actions/quotes";
import Typewriter from "./Typewriter";
import Loading from "./Loading";

export default function Quotes({ quote }: { quote: any }) {
  const [currentQuote, setCurrentQuote] = useState(quote);
  const [switchQuote, setSwitchQuote] = useState(false);

  useEffect(() => {
    if (quote != null) {
      setCurrentQuote(quote);
    }
  }, [quote]);

  const changeQuote = async () => {
    const newQuote = await fetchOneQuote();
    setSwitchQuote(true);

    setTimeout(() => {
      setCurrentQuote(newQuote);
      setSwitchQuote(false);
    }, 1500);
  };

  return (
    <>
      {currentQuote === null ? (
        <></>
      ) : (
        <motion.div
          className="p-8"
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 1000, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Navbar></Navbar>
          <main className="flex flex-col justify-center h-75">
            <h1 className="mt-8">“”</h1>
            <AnimatePresence>
              {switchQuote === true ? (
                <Loading text="..."></Loading>
              ) : (
                <motion.div
                  key="current-quote"
                  initial={{ opacity: 0, x: -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 1000 }}
                >
                  <Typewriter text={currentQuote?.quote_pt}></Typewriter>
                </motion.div>
              )}
            </AnimatePresence>
            <hr className="mt-2" />
            <h3 className="font-light mt-2 uppercase text-gray">
              {currentQuote?.author}
            </h3>
            <button
              className="uppercase button-primary mt-8"
              onClick={async () => {
                await changeQuote();
              }}
            >
              Gerar Outro
            </button>
          </main>
        </motion.div>
      )}
    </>
  );
}
