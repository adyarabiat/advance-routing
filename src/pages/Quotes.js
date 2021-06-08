import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
   { id: "q1", author: "Max", text: "Learning React is fun!" },
   { id: "q2", author: "Ady", text: "Learning React Native is fun!" },
];
const Quotes = () => {
   return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
