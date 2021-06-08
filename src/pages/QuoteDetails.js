import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
   { id: "q1", author: "Max", text: "Learning React is fun!" },
   { id: "q2", author: "Ady", text: "Learning React Native is fun!" },
];
const QuoteDetails = () => {
   const param = useParams();

   const quote = DUMMY_QUOTES.find((quote) => {
      console.log(quote);
      return quote.id === param.quote;
   });

   if (!quote) {
      return <p> No Quote found</p>;
   }

   return (
      <React.Fragment>
         <HighlightedQuote text={quote.text} author={quote.author} />
         <Route path={`/quotes/${param.quote}/comments`}>
            <Comments />
         </Route>
      </React.Fragment>
   );
};

export default QuoteDetails;
