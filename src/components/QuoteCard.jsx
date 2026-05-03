function QuoteCard({ quote }) {
  if (!quote) return null;

  return (
    <div className="card">
      <p className="quote">“{quote.content}”</p>
      <h3 className="author">— {quote.author}</h3>
    </div>
  );
}

export default QuoteCard;