import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import client from './gqlConfig/GqlConfig';
import './index.css';
import App from './components/App/App';



ReactDOM.render(

<ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

document.getElementById('root')
);

