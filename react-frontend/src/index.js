import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"
import RedditApp from './components/RedditApp'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});



ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <RedditApp/>
    </Router>
  </ApolloProvider>
  ,document.getElementById('root')
);

