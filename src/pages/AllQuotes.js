import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Anirup",
    text: "Learning React is fun",
  },
  {
    id: "q2",
    author: "Sharan",
    text: "Learning React is fun",
  },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
