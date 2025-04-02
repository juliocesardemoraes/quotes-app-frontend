import { useEffect, useState } from "react";
import { fetchQuotes } from "./actions/quotes";
import Quotes from "./components/Quotes";

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchQuotes();
      setQuote(data);
    })();
  }, []);

  return <Quotes quote={quote}></Quotes>;
}

export default App;
