import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
   // To go somewhere after click or something
   const history = useHistory();

   const addQuoteHanlder = (quoteData) => {
      console.log(quoteData);

      history.push("/quotes"); //here we are going to this path and we can click back to back here to the new form

      // history.replace("/quotes"); // here we are going to this path BUT we can not click back
   };

   return (
      <>
         <QuoteForm onAddQuote={addQuoteHanlder} />
      </>
   );
};

export default NewQuote;
