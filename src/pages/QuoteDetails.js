import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
   { id: "q1", author: "Max", text: "Learning React is fun!" },
   { id: "q2", author: "Ady", text: "Learning React Native is fun!" },
];
const QuoteDetails = () => {
   const match = useRouteMatch();
   const param = useParams();

   console.log(match);

   const quote = DUMMY_QUOTES.find((quote) => {
      return quote.id === param.quote;
   });

   if (!quote) {
      return <p> No Quote found</p>;
   }

   // we add this route here around the link just to show it when we are on the exact path without the comment so it will disappear when we finish
   return (
      <React.Fragment>
         <HighlightedQuote text={quote.text} author={quote.author} />

         <Route path={`${match.path}`} exact>
            <div className="centered">
               <Link className="btn--flat" to={`${match.url}/comments`}>
                  Add Comment
               </Link>
            </div>
         </Route>

         <Route path={`${match.path}/comments`}>
            <Comments />
         </Route>
      </React.Fragment>
   );
};

export default QuoteDetails;
