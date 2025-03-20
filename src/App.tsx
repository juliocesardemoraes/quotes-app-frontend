import { useEffect, useState } from "react";
import { fetchOneQuote } from "./actions/quotes";
import Loader from "./components/Loader";
import Quotes from "./components/Quotes";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    console.log("CHAMOu");

    (async () => {
      setTimeout(async () => {
        setIsVisible(false);
        console.log("Timeout");
      }, 3000);

      setTimeout(async () => {
        const data = await fetchOneQuote();
        setQuote(data);
      }, 4000);
    })();
  }, []);

  return (
    <>
      <Loader isVisible={isVisible}></Loader>
      <Quotes quote={quote}></Quotes>
    </>
  );
}

export default App;
