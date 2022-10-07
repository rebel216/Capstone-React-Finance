import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import App from './pages/App';
import Stock from './pages/DetailPage';
import StockNews from './pages/StockNewsPage';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Route exact path="/Capstone-React-Finance" component={App} />
    <Route exact path="/Capstone-React-Finance/news" component={StockNews} />
    <Route exact path="/Capstone-React-Finance/stock/:ticker" component={Stock} />
  </Router>
);

export default Routes;
