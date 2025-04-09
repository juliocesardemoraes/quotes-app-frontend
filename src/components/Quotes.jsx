import React, { useEffect, useState } from "react";
import { fetchQuotes } from "../actions/quotes";

export default function Quotes({ quote }) {
  const [currentQuote, setCurrentQuote] = useState(quote);

  useEffect(() => {
    if (quote != null) setCurrentQuote(quote);
  }, [quote]);

  const changeQuote = async () => {
    const quoteData = await fetchQuotes();
    setCurrentQuote(quoteData);
  };

  return (
    <>
      <div>
        <header>
          <nav>
            <a href="/">
              <h2>Quotes</h2>
            </a>
          </nav>
        </header>
        <main className="flex flex-col justify-center h-75">
          <h1 className="mt-8">“”</h1>
          <div className="text-xl">{currentQuote?.quote_pt}</div>
          <hr className="mt-2" />
          <h3 className="font-light mt-2 uppercase text-gray">
            {quote?.author}
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
      </div>
    </>
  );
}
