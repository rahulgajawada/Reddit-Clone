import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from "@apollo/client"
import RedditApp from './components/RedditApp'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { ApolloLink, concat } from "apollo-link";

console.log(localStorage.getItem("token"))
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem("token") || null
    }
  });

  return forward(operation);
});

const httpLink = new HttpLink({ uri: 'http://localhost:4000/'});

const client = new ApolloClient({
  // uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink)
});



ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <RedditApp/>
    </Router>
  </ApolloProvider>
  ,document.getElementById('root')
);

