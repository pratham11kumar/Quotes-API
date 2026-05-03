import { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard";
import "./index.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    try {
      const res = await fetch("https://api.freeapi.app/api/v1/public/quotes");
      const data = await res.json();

      const allQuotes = data.data.data;
      setQuotes(allQuotes);
      setCurrentQuote(
        allQuotes[Math.floor(Math.random() * allQuotes.length)]
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getNewQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(random);
  };

  const copyQuote = () => {
    navigator.clipboard.writeText(currentQuote.content);
    alert("Copied!");
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>✨ Quotes Generator</h1>

        {loading ? (
          <div className="loader"></div>
        ) : (
          <QuoteCard quote={currentQuote} />
        )}

        <div className="buttons">
          <button onClick={getNewQuote}>New Quote</button>
          <button onClick={copyQuote}>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;