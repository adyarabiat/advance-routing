import React, { Suspense } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

// import Quotes from "./pages/Quotes";
// import NewQuote from "./pages/NewQuote";
// import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
// import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const Quotes = React.lazy(() => import("./pages/Quotes"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
// lazy loading :

// import NewQuote from "./pages/NewQuote";
// change it to
// const NewQuote = React.lazy(() => import("./pages/NewQuote"));
// then we import { Suspense } from 'react
// then we wrrape the application with the Suspense and we pass  fallback to do something whilst it is loading

function App() {
   return (
      <Layout>
         <Suspense
            fallback={
               <div className="centered">
                  <LoadingSpinner />
               </div>
            }
         >
            <Switch>
               <Route path="/" exact>
                  <Redirect to="/quotes" />
               </Route>
               <Route path="/quotes" exact>
                  <Quotes />
               </Route>
               <Route path="/quotes/:quote">
                  <QuoteDetails />
               </Route>
               <Route path="/new-quote">
                  <NewQuote />
               </Route>
               <Route path="*">
                  <NotFound />
               </Route>
            </Switch>
         </Suspense>
      </Layout>
   );
}

export default App;
