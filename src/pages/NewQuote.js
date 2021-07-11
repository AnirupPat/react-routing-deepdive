import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote() {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuoteForm={addQuoteHandler} />;
}

export default NewQuote;
