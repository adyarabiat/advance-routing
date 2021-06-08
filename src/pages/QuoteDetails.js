import React from "react";
import { useParams, Route, Link } from "react-router-dom";
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

   // we add this route here around the link just to show it when we are on the exact path without the comment so it will disappear when we finish
   return (
      <React.Fragment>
         <HighlightedQuote text={quote.text} author={quote.author} />

         <Route path={`/quotes/${param.quote}`} exact>
            <div className="centered">
               <Link
                  className="btn--flat"
                  to={`/quotes/${param.quote}/comments`}
               >
                  Add Comment
               </Link>
            </div>
         </Route>

         <Route path={`/quotes/${param.quote}/comments`}>
            <Comments />
         </Route>
      </React.Fragment>
   );
};

export default QuoteDetails;
